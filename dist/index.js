"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatting = exports.storybook = exports.jest = exports.react = exports.featureTests = exports.javascript = void 0;
var javascript_config_js_1 = require("./javascript.config.js");
Object.defineProperty(exports, "javascript", { enumerable: true, get: function () { return __importDefault(javascript_config_js_1).default; } });
var feature_tests_config_js_1 = require("./feature-tests.config.js");
Object.defineProperty(exports, "featureTests", { enumerable: true, get: function () { return __importDefault(feature_tests_config_js_1).default; } });
var react_config_js_1 = require("./react.config.js");
Object.defineProperty(exports, "react", { enumerable: true, get: function () { return __importDefault(react_config_js_1).default; } });
var jest_config_js_1 = require("./jest.config.js");
Object.defineProperty(exports, "jest", { enumerable: true, get: function () { return __importDefault(jest_config_js_1).default; } });
var storybook_config_js_1 = require("./storybook.config.js");
Object.defineProperty(exports, "storybook", { enumerable: true, get: function () { return __importDefault(storybook_config_js_1).default; } });
var formatting_config_js_1 = require("./formatting.config.js");
Object.defineProperty(exports, "formatting", { enumerable: true, get: function () { return __importDefault(formatting_config_js_1).default; } });
