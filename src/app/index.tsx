import 'preact';
import { render } from 'preact';
import pkg from '../../package.json';

function App() {
	return (
		<>
			<main>
				<h1>ordered-dither-maker</h1>
			</main>
			<footer>v{pkg.version}</footer>
		</>
	);
}

render(<App />, document.body);
