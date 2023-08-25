// @ts-ignore
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import js from "@eslint/js";

const nodeModulesPath = path.dirname(".");

export default new FlatCompat({
	baseDirectory: nodeModulesPath,
	resolvePluginsRelativeTo: nodeModulesPath,
	recommendedConfig: js.configs.recommended,
});
