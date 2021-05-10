import 'canvas-toBlob';
import gcd from 'compute-gcd';
import { saveAs } from 'file-saver';
import 'preact';
import { ComponentProps, render } from 'preact';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import pkg from '../../package.json';
import { Grid } from './Grid';
import { useInt, useRange } from './utils';
const inputCanvas = document.createElement('canvas');
const inputCtx = inputCanvas.getContext('2d') as CanvasRenderingContext2D;
const outputCanvas = document.createElement('canvas');
const outputCtx = outputCanvas.getContext('2d') as CanvasRenderingContext2D;

function saveOutput() {
	outputCanvas.toBlob(saveAs);
}

function App() {
	const [srcInput, setSrcInput] = useState('');
	const [srcOutput, setSrcOutput] = useState('');
	const onChange = useCallback<NonNullable<JSXInternal.DOMAttributes<HTMLInputElement>['onChange']>>(event => {
		if (!event.currentTarget?.files?.[0]) return;
		const reader = new FileReader();
		reader.onload = function () {
			setSrcInput(reader.result?.toString() ?? '');
		};
		reader.readAsDataURL(event.currentTarget.files[0]);
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
			inputCtx.drawImage(img, 0, 0, w, h);
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
		};
		img.src = srcInput;
	}, [srcInput]);
	const [layers, setLayers] = useState(4);
	const [width, setWidth] = useState(4);
	const [height, setHeight] = useState(4);
	const [dither, setDither] = useState(() => new Array(layers).fill(0).map(() => new Array(height).fill(0).map(() => new Array(width).fill(false))));
	const [layer, setLayer] = useState(0);

	const toggleValue = useCallback<ComponentProps<typeof Grid>['toggleValue']>(
		(event) => {
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
	}, [dither]);
	return (
		<>
			<main>
				<h1>ordered-dither-maker</h1>
				<section>
					<label htmlFor="source-file">import:</label>
					<input id="source-file" type="file" accept="image/*" onChange={onChange} />

					<hr />

					<label htmlFor="layers">layers:</label>
					<input id="layers" type="number" min={1} max={256} value={layers} onChange={useInt(setLayers)} />

					<label htmlFor="width">width:</label>
					<input id="width" type="number" min={1} value={width} onChange={useInt(setWidth)} />

					<label htmlFor="height">height:</label>
					<input id="height" type="number" min={1} value={height} onChange={useInt(setHeight)} />

					<hr />

					<Grid
						style={{
							'grid-template-columns': `repeat(${width}, 1fr)`,
							'grid-template-rows': `repeat(${height}, 1fr)`,
						}}
						value={dither[layer]}
						required={required}
						toggleValue={toggleValue}
					/>
					<label htmlFor="layer">layer:</label>
					<input id="layer" type="range" min={0} max={layers - 1} step={1} value={layer} data-value={layer + 1} onChange={useRange(setLayer)} />
				</section>

				<section>
					<figure>
						<figcaption>
							output <button onClick={saveOutput}>save</button>
						</figcaption>
						<img alt="Output image" id="output-img" src={srcOutput} />
					</figure>
				</section>
			</main>
			<footer>v{pkg.version}</footer>
		</>
	);
}

render(<App />, document.body);
