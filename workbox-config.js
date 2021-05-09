module.exports = {
	globDirectory: './docs',
	globPatterns: ['**/*.{html,css,png,js,webmanifest}'],
	swDest: './docs/service-worker.js',
	inlineWorkboxRuntime: true,
	sourcemap: false,
};
