import { javascript, formatting } from "./lib/index.ts";

export default [
	{
		files: ["lib/**"],
		ignores: ["types/**"],
	},
	...javascript,
	...formatting,
];
