// @ts-ignore
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
const nodeModulesPath = path.dirname("/node_modules");
export default new FlatCompat({
    baseDirectory: nodeModulesPath,
    resolvePluginsRelativeTo: nodeModulesPath,
});
