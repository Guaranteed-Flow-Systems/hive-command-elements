"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const react_1 = __importDefault(require("react"));
const Circle = (props) => {
    var _a, _b;
    return (react_1.default.createElement("svg", { width: props.width, height: props.width },
        react_1.default.createElement("circle", { fill: ((_a = props.options) === null || _a === void 0 ? void 0 : _a.fill) || 'none', stroke: (_b = props.options) === null || _b === void 0 ? void 0 : _b.strokeColor, r: (props === null || props === void 0 ? void 0 : props.width) / 2 })));
};
exports.Circle = Circle;
exports.Circle.metadata = {
    width: 50,
    height: 50,
    options: {
        fill: 'String',
        strokeColor: 'String'
    }
};
