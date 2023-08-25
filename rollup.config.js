import commonJs from "@rollup/plugin-commonjs";
import ts from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export default {
	input: 'lib/index.ts',
	output: [{
		file: 'dist/index.js',
		format: 'cjs',
	}],
	plugins: [
		commonJs(),
		ts({ noForceEmit: true }),
		babel({ babelHelpers: "bundled" }),
	], 
}
