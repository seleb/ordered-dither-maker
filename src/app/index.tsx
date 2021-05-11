import 'canvas-toBlob';
import gcd from 'compute-gcd';
import { saveAs } from 'file-saver';
import Flickr from 'flickr-sdk';
import 'preact';
import { ComponentProps, render } from 'preact';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import pkg from '../../package.json';
import { fragment } from './fragment';
import Gl, { Shader, Texture } from './gl';
import { Grid } from './Grid';
import sampleImage from './img/506px-1665_Girl_with_a_Pearl_Earring.jpg';
import bayer16 from './img/bayer16.png';
import bayer2 from './img/bayer2.png';
import bayer4 from './img/bayer4.png';
import bayer8 from './img/bayer8.png';
import checker from './img/checker2.png';
import diagonals from './img/diagonals4.png';
import { Modal } from './Modal';
import { Range } from './Range';
import { useCheckbox, useInt } from './utils';
import { vertex } from './vertex';

const FLICKR_API_KEY = '306bf363cfbce3604dbbf827bd5f7398';

const flickr = new Flickr(FLICKR_API_KEY);

const inputCanvas = document.createElement('canvas');
const inputCtx = inputCanvas.getContext('2d') as CanvasRenderingContext2D;
const outputCanvas = document.createElement('canvas');
const outputCtx = outputCanvas.getContext('2d') as CanvasRenderingContext2D;
const previewCanvas = document.createElement('canvas');

// create shader
const gl = Gl(previewCanvas);
const shader = new Shader(vertex, fragment);

// create plane
const vertices = new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0]);
const vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
// cache GL attribute/uniform locations
const glLocations = {
	position: gl.getAttribLocation(shader.program, 'position'),
	texPreview: gl.getUniformLocation(shader.program, 'texPreview'),
	texDither: gl.getUniformLocation(shader.program, 'texDither'),
	resolution: gl.getUniformLocation(shader.program, 'resolution'),
	ditherSize: gl.getUniformLocation(shader.program, 'ditherSize'),
	scale: gl.getUniformLocation(shader.program, 'scale'),
	posterize: gl.getUniformLocation(shader.program, 'posterize'),
	grayscale: gl.getUniformLocation(shader.program, 'grayscale'),
	contrast: gl.getUniformLocation(shader.program, 'contrast'),
	brightness: gl.getUniformLocation(shader.program, 'brightness'),
};
// misc. GL setup
gl.enableVertexAttribArray(glLocations.position);
shader.useProgram();
gl.vertexAttribPointer(glLocations.position, 2, gl.FLOAT, false, 0, 0);
gl.clearColor(0, 0, 0, 0.0);
gl.uniform1i(glLocations.texPreview, 0);
gl.uniform1i(glLocations.texDither, 1);
const texturePreview = new Texture(new Image(), 0, false);
const textureDither = new Texture(new Image(), 1, true);

function renderOutput() {
	gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2);
}

function saveOutput() {
	outputCanvas.toBlob(saveAs);
}

function savePreview() {
	renderOutput();
	previewCanvas.toBlob(saveAs);
}

function App() {
	const [srcInput, setSrcInput] = useState(bayer4);
	const [srcOutput, setSrcOutput] = useState('');
	const [srcPreview, setSrcPreview] = useState(sampleImage);
	const [loading, setLoading] = useState(false);
	const [layers, setLayers] = useState(4);
	const [width, setWidth] = useState(4);
	const [height, setHeight] = useState(4);
	const [dither, setDither] = useState(() => new Array(layers).fill(0).map(() => new Array(height).fill(0).map(() => new Array(width).fill(false))));
	const [layer, setLayer] = useState(0);
	const [posterize, setPosterize] = useState(1);
	const [grayscale, setGrayscale] = useState(true);
	const [contrast, setContrast] = useState(1);
	const [brightness, setBrightness] = useState(1);
	const [scale, setScale] = useState(2);
	const [about, setAbout] = useState(false);
	const closeAbout = useCallback(() => setAbout(false));
	const openAbout = useCallback(() => setAbout(true));
	const onChange = useCallback<NonNullable<JSXInternal.DOMAttributes<HTMLInputElement>['onChange']>>(event => {
		if (!event.currentTarget?.files?.[0]) return;
		const reader = new FileReader();
		reader.onload = function () {
			setSrcInput(reader.result?.toString() ?? '');
		};
		reader.readAsDataURL(event.currentTarget.files[0]);
	}, []);

	const onPreviewChange = useCallback<NonNullable<JSXInternal.DOMAttributes<HTMLInputElement>['onChange']>>(event => {
		if (!event.currentTarget?.files?.[0]) return;
		setLoading(true);
		setSrcPreview('');
		const reader = new FileReader();
		reader.onload = function () {
			setSrcPreview(reader.result?.toString() ?? '');
			setBrightness(1);
			setContrast(1);
			setLoading(false);
		};
		reader.readAsDataURL(event.currentTarget.files[0]);
	}, []);

	const getRandomPreview = useCallback(async () => {
		setSrcPreview('');
		setLoading(true);
		try {
			const {
				body: {
					photoset: { count_photos },
				},
			} = await flickr.photosets.getInfo({
				photoset_id: '72157641858423503',
				user_id: '12403504@N02',
			});
			const {
				body: {
					photoset: {
						photo: [{ id }],
					},
				},
			} = await flickr.photosets.getPhotos({
				photoset_id: '72157641858423503',
				user_id: '12403504@N02',
				per_page: 1,
				page: Math.floor(Math.random() * count_photos),
				media: 'photos',
				extra: 'url_m',
			});
			const { body } = await flickr.photos.getSizes({ photo_id: id });
			setSrcPreview(body.sizes.size.filter((i, idx) => idx === 0 || i.width < previewCanvas.parentElement?.clientWidth).pop().source);
			setBrightness(1);
			setContrast(2);
		} catch (e) {
			console.error(e);
			window.alert('Failed to load random image; see console for details');
		} finally {
			setLoading(false);
		}
	}, []);

	const preset = useCallback<NonNullable<JSXInternal.DOMAttributes<HTMLButtonElement>['onClick']>>(event => {
		setSrcInput(event.currentTarget.value);
	}, []);

	useEffect(() => {
		if (!srcInput) return;
		const img = new Image();
		img.onerror = img.onload = () => {
			const w = img.naturalWidth;
			const h = img.naturalHeight;
			inputCanvas.width = w;
			inputCanvas.height = h;

			if (w * h > 256) {
				const ignoredWarning = window.confirm('This image is larger than recommended, and may slow down your browser if you continue.');
				if (!ignoredWarning) return;
			}
			inputCtx.drawImage(img, 0, 0);
			const data = inputCtx.getImageData(0, 0, w, h);
			let output: number[][] = new Array(h).fill(0).map(() => new Array(w).fill(0));
			for (let y = 0; y < h; ++y) {
				for (let x = 0; x < w; ++x) {
					output[y][x] = data.data[(x + y * w) * 4];
					if (output[y][x]) {
						output[y][x] = output[y][x] + 1;
					}
				}
			}
			const divisor = gcd([...new Set(output.flat()), 256]);
			output = output.map(row => row.map(i => i / divisor));
			const l = 256 / divisor;
			setLayer(0);
			setWidth(w);
			setHeight(h);
			setLayers(l);
			setDither(new Array(l).fill(0).map((_, layer) => new Array(h).fill(0).map((_, y) => new Array(w).fill(0).map((_, x) => output[y][x] === layer + 1))));
			setSrcInput('');
		};
		img.src = srcInput;
	}, [srcInput]);

	const clear = useCallback(() => {
		setDither(new Array(dither.length).fill(0).map(() => new Array(dither[0].length).fill(0).map(() => new Array(dither[0][0].length).fill(false))));
	}, [dither]);

	const toggleValue = useCallback<ComponentProps<typeof Grid>['toggleValue']>(
		event => {
			const target = event.currentTarget;
			const x = parseInt(target.dataset.x || '0', 10);
			const y = parseInt(target.dataset.y || '0', 10);
			const v = JSON.parse(JSON.stringify(dither));
			v[layer][y][x] = !v[layer][y][x];
			setDither(v);
		},
		[dither, layer]
	);

	useLayoutEffect(() => {
		// restrict layer to available layers
		setLayer(Math.min(layers - 1, layer));
		// update dither state to reflect dimensions
		const v = new Array(layers).fill(0).map((_, l) => new Array(height).fill(0).map((_, y) => new Array(width).fill(0).map((_, x) => dither[l]?.[y]?.[x] || false)));
		setDither(v);
	}, [width, height, layers]);

	// make a map of which spaces are required due to state of layers underneath
	const required = useMemo(() => new Array(dither[0].length).fill(0).map((_, y) => new Array(dither[0][0].length).fill(0).map((_, x) => dither.slice(0, layer).some(grid => grid[y][x]))), [
		dither,
		layer,
	]);

	// convert dither state to texture
	useEffect(() => {
		const l = dither.length;
		const h = dither[0].length;
		const w = dither[0][0].length;
		outputCanvas.width = w;
		outputCanvas.height = h;
		outputCtx.fillStyle = `rgb(0,0,0)`;
		outputCtx.fillRect(0, 0, w, h);
		for (let y = 0; y < h; ++y) {
			for (let x = 0; x < w; ++x) {
				const brightness = Math.max(0, ((dither.findIndex(d => d[y][x]) + 1) / l) * 256 - 1);
				outputCtx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
				outputCtx.fillRect(x, y, 1, 1);
			}
		}
		setSrcOutput(outputCanvas.toDataURL());

		textureDither.source = outputCanvas;
		textureDither.update();
		textureDither.bind();
		gl.uniform2f(glLocations.ditherSize, w, h);
		renderOutput();
	}, [dither]);

	// update preview texture
	useEffect(() => {
		const img = new Image();
		img.crossOrigin = 'anonymous';
		img.onerror = img.onload = () => {
			texturePreview.source = img;
			texturePreview.update();
			texturePreview.bind();
			previewCanvas.width = img.naturalWidth;
			previewCanvas.height = img.naturalHeight;
			gl.viewport(0, 0, previewCanvas.width, previewCanvas.height);
			gl.uniform2f(glLocations.resolution, previewCanvas.width, previewCanvas.height);
			renderOutput();
		};
		img.src = srcPreview;
	}, [srcPreview]);

	// put preview canvas in document
	useEffect(() => {
		document.querySelector('#preview-container')?.appendChild(previewCanvas);
	}, []);
	// update posterization level
	useEffect(() => {
		gl.uniform1f(glLocations.posterize, posterize);
		renderOutput();
	}, [posterize]);
	// update grayscale
	useEffect(() => {
		gl.uniform1f(glLocations.grayscale, grayscale ? 1.0 : 0.0);
		renderOutput();
	}, [grayscale]);
	// update scale
	useEffect(() => {
		gl.uniform1f(glLocations.scale, scale);
		renderOutput();
	}, [scale]);
	// update contrast
	useEffect(() => {
		gl.uniform1f(glLocations.contrast, contrast);
		renderOutput();
	}, [contrast]);
	// update brightness
	useEffect(() => {
		gl.uniform1f(glLocations.brightness, brightness);
		renderOutput();
	}, [brightness]);
	return (
		<>
			<main>
				<section id="controls">
					<h1 className="fill">{pkg.name}</h1>
					<label htmlFor="source-file" title="import a previously-generated threshold map">import:</label>
					<input id="source-file" type="file" accept="image/*" onChange={onChange} />
					<details className="fill">
						<summary>presets</summary>
						<ul>
							<li>
								<button value={checker} onClick={preset}>
									checker
								</button>
							</li>
							<li>
								<button value={diagonals} onClick={preset}>
									diagonals
								</button>
							</li>
							<li>
								<button value={bayer2} onClick={preset}>
									bayer2
								</button>
							</li>
							<li>
								<button value={bayer4} onClick={preset}>
									bayer4
								</button>
							</li>
							<li>
								<button value={bayer8} onClick={preset}>
									bayer8
								</button>
							</li>
							<li>
								<button value={bayer16} onClick={preset}>
									bayer16
								</button>
							</li>
							<li>
								<button onClick={clear}>clear</button>
							</li>
						</ul>
					</details>

					<hr />

					<label htmlFor="layers" title="layers in generated texture (non-powers of 2 will expand to 256 on reimport)">{Math.log2(layers)%1 !== 0 && '(!) '} layers:</label>
					<input id="layers" type="number" min={1} max={256} value={layers} onChange={useInt(setLayers)} />

					<label htmlFor="width" title="width of generated texture">width:</label>
					<input id="width" type="number" min={1} value={width} onChange={useInt(setWidth)} />

					<label htmlFor="height" title="height of generated texture">height:</label>
					<input id="height" type="number" min={1} value={height} onChange={useInt(setHeight)} />

					<hr />

					<Grid
						style={{
							'grid-template-columns': `repeat(${width}, 1fr)`,
							'grid-template-rows': `repeat(${height}, 1fr)`,
							'grid-gap': Math.max(width, height) > 16 ? '0' : '1px',
							'min-width': `${width*4+2}px`,
						}}
						value={dither[layer]}
						required={required}
						toggleValue={toggleValue}
					/>
					<label htmlFor="layer" title="layer to draw on (pixels filled due to layers underneath are shown grayed out)">layer:</label>
					<Range id="layer" min={0} max={layers - 1} step={1} value={layer} setValue={setLayer} />

					<hr />

					<h2>preview options</h2>

					<label htmlFor="preview-file" title="import a custom preview image">import:</label>
					<input disabled={loading} id="preview-file" type="file" accept="image/*" onChange={onPreviewChange} />
					<button title="load a random preview image" disabled={loading} className="fill" onClick={getRandomPreview}>
						random
					</button>

					<label htmlFor="grayscale" title="whether to convert to grayscale before applying dither">
						grayscale:
					</label>
					<input id="grayscale" type="checkbox" checked={grayscale} onChange={useCheckbox(setGrayscale)} />

					<label htmlFor="posterize" title="level of posterization to apply before dither; higher values mean more colours in the final image">
						steps:
					</label>
					<Range id="posterize" min={1} max={128} step={1} value={posterize} setValue={setPosterize} />

					<label htmlFor="scale" title="size of pixels in preview">
						pixel scale:
					</label>
					<Range id="scale" min={1} max={8} step={1} value={scale} setValue={setScale} />

					<label htmlFor="brightness" title="brightness to apply before dither">
						brightness:
					</label>
					<Range id="brightness" min={0} max={2} step={0.01} value={brightness} setValue={setBrightness} />

					<label htmlFor="contrast" title="contrast to apply before dither">
						contrast:
					</label>
					<Range id="contrast" min={1} max={9.99} step={0.01} value={contrast} setValue={setContrast} />
				</section>

				<section id="preview">
					<figure>
						<figcaption>
							output <button title="save generated threshold map" onClick={saveOutput}>save</button>
						</figcaption>
						<div>
							<img alt="Output image" id="output-img" src={srcOutput} />
						</div>
					</figure>

					<figure id="preview-figure">
						<figcaption>
							preview <button title="save current preview image with dither applied" onClick={savePreview}>save</button>
						</figcaption>
						<div id="preview-container"></div>
					</figure>
				</section>
			</main>
			<footer>
				<button onClick={openAbout}>about</button>
			</footer>
			{about && (
				<Modal close={closeAbout}>
					<h2>
						{pkg.name} v{pkg.version}
					</h2>
					<p>
						This tool allows you to create textures that can be used as threshold maps for{' '}
						<a href="https://en.wikipedia.org/wiki/Ordered_dithering" target="_blank" rel="noopener noreferrer">
							ordered dithering
						</a>
						, a technique usually implemented using programmatically generated Bayer matrices.
					</p>
					<p>
						The drawing grid allows you to visualize each "layer" of the threshold map, and to build up the final texture additively. The preview area applies a basic posterize + dither through
						post-processing using the generated texture (source available{' '}
						<a href="https://github.com/seleb/ordered-dither-maker/blob/main/src/app/fragment.ts" target="_blank" rel="noopener noreferrer">
							here
						</a>
						).
					</p>
					<p>
						Randomized preview images sourced from a{' '}
						<a href="https://www.flickr.com/photos/britishlibrary/albums/72157641858423503" target="_blank" rel="noopener noreferrer">
							British Library collection
						</a>{' '}
						of public domain works.
					</p>
					<nav>
						<button onClick={closeAbout}>close</button>
					</nav>
				</Modal>
			)}
		</>
	);
}

render(<App />, document.body);
