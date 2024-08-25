import 'canvas-toBlob';
import gcd from 'compute-gcd';
import { saveAs } from 'file-saver';
import Flickr from 'flickr-sdk';
import { getPixels } from 'just-give-me-the-pixels';
import 'preact';
import { render } from 'preact';
import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useState } from 'preact/hooks';
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
const PX_WARN = 512;
const PX_IMMEDIATE = 1024;

const flickr = new Flickr(FLICKR_API_KEY);

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
	invert: gl.getUniformLocation(shader.program, 'invert'),
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
	const [srcPreview, setSrcPreview] = useState(sampleImage);
	const [urlPreview, setUrlPreview] = useState(sampleImage);
	const [loading, setLoading] = useState(false);
	const [layers, setLayers] = useState(4);
	const [width, setWidth] = useState(4);
	const [height, setHeight] = useState(4);
	const [dither, dispatch] = useReducer(
		(state, action: { type: 'set'; payload: boolean[][][] } | { type: 'set-layer'; payload: [number, boolean[][]] } | { type: 'set-pixel'; payload: [number, number, number, boolean] }) => {
			switch (action.type) {
				case 'set':
					return action.payload;
				case 'set-layer': {
					const [layer, value] = action.payload;
					const v = JSON.parse(JSON.stringify(state));
					v[layer] = value;
					return v;
				}
				case 'set-pixel': {
					const [layer, x, y, value] = action.payload;
					const v = JSON.parse(JSON.stringify(state));
					v[layer][y][x] = value;
					return v;
				}
			}
		},
		new Array(layers).fill(0).map(() => new Array(height).fill(0).map(() => new Array(width).fill(false))) as boolean[][][]
	);
	const [layer, setLayer] = useState(0);
	const [posterize, setPosterize] = useState(1);
	const [grayscale, setGrayscale] = useState(true);
	const [invert, setInvert] = useState(false);
	const [contrast, setContrast] = useState(1);
	const [brightness, setBrightness] = useState(1);
	const [scale, setScale] = useState(2);
	const [about, setAbout] = useState(false);
	const setDither = useCallback((payload: typeof dither) => dispatch({ type: 'set', payload }), [dispatch]);
	const setDitherLayer = useCallback((value: boolean[][]) => dispatch({ type: 'set-layer', payload: [layer, value] }), [dispatch, layer]);
	const setDitherPixel = useCallback((x: number, y: number, value: boolean) => dispatch({ type: 'set-pixel', payload: [layer, x, y, value] }), [dispatch, layer]);
	const closeAbout = useCallback(() => setAbout(false), []);
	const openAbout = useCallback(() => setAbout(true), []);
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
		setUrlPreview('');
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
		setUrlPreview('');
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
			});
			const { body } = await flickr.photos.getSizes({ photo_id: id });
			setSrcPreview(body.sizes.size.filter((i, idx) => idx === 0 || i.width < previewCanvas.parentElement?.clientWidth).pop().source);
			setBrightness(1);
			setContrast(2);
			setUrlPreview(`https://flickr.com/photos/britishlibrary/${id}`);
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
		(async function () {
			const { width: w, height: h, data } = await getPixels(srcInput);

			if (w * h > PX_WARN) {
				const ignoredWarning = window.confirm('This image is larger than recommended, and may slow down your browser if you continue.\n\nAre you sure this is a dither texture and not a preview image? Preview images should be uploaded in the second "import" field below.');
				if (!ignoredWarning) return;
			}

			let output: number[][] = new Array(h).fill(0).map(() => new Array(w).fill(0));
			for (let y = 0; y < h; ++y) {
				for (let x = 0; x < w; ++x) {
					output[y][x] = data[(x + y * w) * 4];
					if (output[y][x]) {
						output[y][x] = output[y][x] + 1;
					}
				}
			}
			const divisor = gcd([...new Set(output.flat()), 256]) || 1;
			output = output.map(row => row.map(i => i / divisor));
			const l = 256 / divisor;
			setLayer(0);
			setWidth(w);
			setHeight(h);
			setLayers(l);
			setDither(new Array(l).fill(0).map((_, layer) => new Array(h).fill(0).map((_, y) => new Array(w).fill(0).map((_, x) => output[y][x] === layer + 1))));
			setSrcInput('');
		})();
	}, [srcInput]);

	const clear = useCallback(() => {
		setDither(new Array(dither.length).fill(0).map(() => new Array(dither[0].length).fill(0).map(() => new Array(dither[0][0].length).fill(false))));
	}, [dither]);

	useLayoutEffect(() => {
		// restrict layer to available layers
		setLayer(Math.min(layers - 1, layer));
		// update dither state to reflect dimensions
		const v = new Array(layers).fill(0).map((_, l) => new Array(height).fill(0).map((_, y) => new Array(width).fill(0).map((_, x) => dither[l]?.[y]?.[x] || false)));
		setDither(v);
	}, [width, height, layers]);

	// make a map of which spaces are required due to state of layers underneath
	const required = useMemo(
		() => new Array(dither[0].length).fill(0).map((_, y) => new Array(dither[0][0].length).fill(0).map((_, x) => dither.slice(0, layer).some(grid => grid[y][x]))),
		[dither, layer]
	);

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

		textureDither.source = outputCanvas;
		textureDither.update();
		textureDither.bind();
		gl.uniform2f(glLocations.ditherSize, w, h);
		renderOutput();
	}, [dither]);

	// update preview texture
	useEffect(() => {
		const img = texturePreview.source;
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
		img.src = srcPreview || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
	}, [srcPreview]);

	// put preview and output canvas in document
	useEffect(() => {
		document.querySelector('#preview-container')?.appendChild(previewCanvas);
		document.querySelector('#output-container')?.appendChild(outputCanvas);
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
	// update invert
	useEffect(() => {
		gl.uniform1f(glLocations.invert, invert ? 1.0 : 0.0);
		renderOutput();
	}, [invert]);
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

	const [size, setSize] = useState(0.5);
	const startResize = useCallback<NonNullable<JSXInternal.DOMAttributes<HTMLHRElement>['onPointerDown']>>(event => {
		const container = event.currentTarget.parentElement;
		function onMove(e: MouseEvent) {
			if (container) {
				// size is percentage, taking into account fixed padding/hr height
				setSize((e.clientY - 16 * 1.25) / (container.clientHeight - 16 * 2.5));
			}
		}
		function onUp() {
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerup', onUp);
			document.body.style.cursor = '';
		}
		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerup', onUp);
		document.body.style.cursor = 'ns-resize';
	}, []);

	// change layer with right/left arrow keys
	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (!(document.activeElement === document.body || document.querySelector('.grid')?.contains(document.activeElement))) return;
			if (event.key === 'ArrowRight' && layer < layers - 1) {
				setLayer(layer + 1);
			} else if (event.key === 'ArrowLeft' && layer > 0) {
				setLayer(layer - 1);
			}
		}
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [layer, layers]);
	const toggleTheme = useCallback(() => {
		const theme = document.documentElement.dataset.theme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		document.documentElement.dataset.theme = theme === 'dark' ? 'light' : 'dark';
	}, []);
	return (
		<>
			<main>
				<section id="controls">
					<h1 className="fill">{pkg.name}</h1>

					<hr />

					<h2>threshold map options</h2>

					<label htmlFor="source-file" title="import a previously-generated threshold map">
						import:
					</label>
					<input id="source-file" type="file" accept="image/*" onChange={onChange} />
					<details className="fill">
						<summary>presets</summary>
						<ul>
							<li>
								<button type="button" value={checker} onClick={preset}>
									checker
								</button>
							</li>
							<li>
								<button type="button" value={diagonals} onClick={preset}>
									diagonals
								</button>
							</li>
							<li>
								<button type="button" value={bayer2} onClick={preset}>
									bayer2
								</button>
							</li>
							<li>
								<button type="button" value={bayer4} onClick={preset}>
									bayer4
								</button>
							</li>
							<li>
								<button type="button" value={bayer8} onClick={preset}>
									bayer8
								</button>
							</li>
							<li>
								<button type="button" value={bayer16} onClick={preset}>
									bayer16
								</button>
							</li>
							<li>
								<button type="button" onClick={clear}>clear</button>
							</li>
						</ul>
					</details>

					<hr />

					<label htmlFor="layers" title="layers in generated texture (non-powers of 2 will expand to 256 on reimport)">
						{Math.log2(layers) % 1 !== 0 && '(!) '} layers:
					</label>
					<input id="layers" type="number" min={1} max={256} step={1} value={layers} onChange={useInt(setLayers)} />

					<label htmlFor="width" title="width of generated texture">
						width:
					</label>
					<input id="width" type="number" min={1} step={1} value={width} onChange={useInt(setWidth)} />

					<label htmlFor="height" title="height of generated texture">
						height:
					</label>
					<input id="height" type="number" min={1} step={1} value={height} onChange={useInt(setHeight)} />

					<hr />

					<Grid immediate={width * height < PX_IMMEDIATE} value={dither[layer]} locked={required} setAll={setDitherLayer} setOne={setDitherPixel} />
					<label htmlFor="layer" title="layer to draw on (pixels filled due to layers underneath are shown grayed out)">
						layer:
					</label>
					<Range id="layer" min={0} max={layers - 1} step={1} value={layer} setValue={setLayer} />

					<hr />

					<h2>preview options</h2>

					<label htmlFor="preview-file" title="import a custom preview image">
						import:
					</label>
					<input disabled={loading} id="preview-file" type="file" accept="image/*" onChange={onPreviewChange} />
					<button type="button" title="load a random preview image" disabled={loading} className="fill" onClick={getRandomPreview}>
						random
					</button>

					<label htmlFor="grayscale" title="whether to convert to grayscale before applying dither">
						grayscale:
					</label>
					<input id="grayscale" type="checkbox" checked={grayscale} onChange={useCheckbox(setGrayscale)} />

					<label htmlFor="invert" title="whether to invert before applying dither">
						invert:
					</label>
					<input id="invert" type="checkbox" checked={invert} onChange={useCheckbox(setInvert)} />

					<label htmlFor="posterize" title="level of posterization to apply before dither; higher values mean more colours in the final image">
						steps:
					</label>
					<Range id="posterize" min={1} max={32} step={1} value={posterize} setValue={setPosterize} />

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
					<figure style={{ flex: size }}>
						<figcaption>
							output{' '}
							<button type="button" title="save generated threshold map" onClick={saveOutput}>
								save
							</button>
						</figcaption>
						<div id="output-container" />
					</figure>
					<hr onPointerDown={startResize} />
					<figure style={{ flex: 1.0 - size }} id="preview-figure">
						<figcaption>
							preview{' '}
							<button type="button" title="save current preview image with dither applied" onClick={savePreview}>
								save
							</button>{' '}
							{urlPreview && <a href={urlPreview} target="_blank" rel="noopener noreferrer" title="Original" aria-label="Original">🔍</a>}
						</figcaption>
						<div id="preview-container"></div>
					</figure>
				</section>
			</main>
			<footer>
				<button type="button" id="toggle-theme" onClick={toggleTheme} title="Toggle theme">Toggle theme</button>
				<button type="button" onClick={openAbout}>about</button>
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
					<p>Tips:</p>
					<ul>
						<li>Drag the bar between the output and preview sections to resize</li>
						<li>
							Use <kbd>ArrowLeft</kbd> and <kbd>ArrowRight</kbd> to change the current layer while drawing
						</li>
					</ul>
					<p>
						Randomized preview images sourced from a{' '}
						<a href="https://www.flickr.com/photos/britishlibrary/albums/72157641858423503" target="_blank" rel="noopener noreferrer">
							British Library collection
						</a>{' '}
						of public domain works.
					</p>
					<nav>
						<button type="button" onClick={closeAbout}>close</button>
					</nav>
				</Modal>
			)}
		</>
	);
}

render(<App />, document.body);
