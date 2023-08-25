import * as config from "@sikaeducation/eslint-config-ts-react/js";
const { javascript, formatting } = config

export default [
	{
		files: ["lib/**"],
	},
	...javascript,
	...formatting,
];
