import 'preact';
import { render } from 'preact';
import pkg from '../../package.json';
import { Grid } from './Grid';

function App() {
	const [layers, setLayers] = useState(4);
	const [width, setWidth] = useState(4);
	const [height, setHeight] = useState(4);
	const [dither, setDither] = useState(() => new Array(layers).fill(0).map(() => new Array(height).fill(0).map(() => new Array(width).fill(false))));

	useEffect(() => {
		const v = new Array(layers).fill(0).map((_, l) => new Array(height).fill(0).map((_, y) => new Array(width).fill(0).map((_, x) => dither[l]?.[y]?.[x] || false)));
		setDither(v);
	}, [width, height, layers]);

	const [layer, setLayer] = useState(0);
	useEffect(() => {
		setLayer(Math.min(layers - 1, layer));
	}, [layers, layer]);

	const required = useMemo(() => new Array(dither[0].length).fill(0).map((_, y) => new Array(dither[0][0].length).fill(0).map((_, x) => dither.slice(0, layer).some(grid => grid[y][x]))), [
		dither,
		layer,
	]);
	return (
		<>
			<main>
				<h1>ordered-dither-maker</h1>
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
					toggleValue={(x, y) => {
						const v = JSON.parse(JSON.stringify(dither));
						v[layer][y][x] = !v[layer][y][x];
						setDither(v);
					}}
				/>
				<label htmlFor="layer">layer:</label>
				<input id="layer" type="range" min={0} max={layers - 1} step={1} value={layer} data-value={layer} onChange={useRange(setLayer)} />
			</main>
			<footer>v{pkg.version}</footer>
		</>
	);
}

render(<App />, document.body);
