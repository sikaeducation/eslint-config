import { javascript, formatting } from "./lib/index.js";

export default [
	{
		files: ["lib/**"],
		ignores: ["types/**"],
	},
	...javascript,
	...formatting,
];
