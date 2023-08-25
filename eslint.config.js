const config = require("@sikaeducation/eslint-config-ts-react/js");
const { javascript, formatting } = config

module.exports = [
	{
		files: ["lib/**"],
	},
	...javascript,
	...formatting,
];
