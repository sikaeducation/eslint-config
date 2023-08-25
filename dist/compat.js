"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const eslintrc_1 = require("@eslint/eslintrc");
const path_1 = __importDefault(require("path"));
const nodeModulesPath = path_1.default.dirname("/node_modules");
exports.default = new eslintrc_1.FlatCompat({
    baseDirectory: nodeModulesPath,
    resolvePluginsRelativeTo: nodeModulesPath,
});
