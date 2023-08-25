import { javascript, formatting } from "@sikaeducation/eslint-config-ts-react/js";

export default [
	{
		files: ["lib/**"],
	},
	...javascript,
	...formatting,
];
