'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatting = exports.storybook = exports.jest = exports.react = exports.featureTests = exports.javascript = void 0;
var javascript_config_1 = require("./javascript.config");
Object.defineProperty(exports, "javascript", { enumerable: true, get: function () { return __importDefault(javascript_config_1).default; } });
var feature_tests_config_1 = require("./feature-tests.config");
Object.defineProperty(exports, "featureTests", { enumerable: true, get: function () { return __importDefault(feature_tests_config_1).default; } });
var react_config_1 = require("./react.config");
Object.defineProperty(exports, "react", { enumerable: true, get: function () { return __importDefault(react_config_1).default; } });
var jest_config_1 = require("./jest.config");
Object.defineProperty(exports, "jest", { enumerable: true, get: function () { return __importDefault(jest_config_1).default; } });
var storybook_config_1 = require("./storybook.config");
Object.defineProperty(exports, "storybook", { enumerable: true, get: function () { return __importDefault(storybook_config_1).default; } });
var formatting_config_1 = require("./formatting.config");
Object.defineProperty(exports, "formatting", { enumerable: true, get: function () { return __importDefault(formatting_config_1).default; } });
