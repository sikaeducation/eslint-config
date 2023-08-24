// @ts-ignore
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const currentPath = fileURLToPath(import.meta.url);
const nodeModulesPath = path.dirname(currentPath);

export default new FlatCompat({
	baseDirectory: nodeModulesPath,
	resolvePluginsRelativeTo: nodeModulesPath,
});
