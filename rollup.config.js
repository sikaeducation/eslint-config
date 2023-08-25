const commonJs = require("@rollup/plugin-commonjs")
const ts = require('@rollup/plugin-typescript');

module.exports = {
	input: 'lib/index.ts',
	output: [{
		file: 'dist/index.js',
		format: 'cjs',
	}],
	plugins: [commonJs(), ts()]
}
