import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/index.js',
	plugins: [ buble() ],
	external: [ 'path', 'fs', 'builtin-modules', 'resolve', 'browser-resolve' ],
	targets: [
		{ dest: 'dist/rollup-plugin-node-resolve-jail.cjs.js', format: 'cjs' },
		{ dest: 'dist/rollup-plugin-node-resolve-jail.es.js', format: 'es6' }
	]
};
