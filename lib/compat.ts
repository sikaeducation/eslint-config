// @ts-ignore
import { FlatCompat } from "@eslint/eslintrc";
// @ts-ignore
import path from "path";
// @ts-ignore
import js from "@eslint/js";

const nodeModulesPath = path.dirname(".");

export default new FlatCompat({
	baseDirectory: nodeModulesPath,
	resolvePluginsRelativeTo: nodeModulesPath,
	recommendedConfig: js.configs.recommended,
});
