export default {
	input: 'src/index.js',
	output: [
		{ file: 'dist/blink.cjs.js', format: 'cjs' },
		{ file: 'dist/blink.es.js', format: 'es' }
	]
}
