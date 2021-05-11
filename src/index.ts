import 'babel-polyfill';
import 'preact/debug';
import 'reset-css';
import './style';

const loading = document.createElement('p');
loading.innerText = 'Loading...';
document.body.appendChild(loading);

requestAnimationFrame(async () => {
	try {
		await import('./app');
		loading.remove();
	} catch (err) {
		document.body.innerHTML = '<p>Something went wrong. Sorry :(</p>';
		console.error(err);
	}
});
