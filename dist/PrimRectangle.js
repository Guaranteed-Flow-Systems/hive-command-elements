"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const react_1 = __importDefault(require("react"));
const Rectangle = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const strokeWidth = parseFloat(((_a = props.options) === null || _a === void 0 ? void 0 : _a.strokeWidth) || 0);
    return (react_1.default.createElement("svg", { width: props.width, height: props.height },
        react_1.default.createElement("rect", { x: strokeWidth / 2, y: strokeWidth / 2, fill: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.fill) || 'none', width: (props === null || props === void 0 ? void 0 : props.width) - (strokeWidth), height: (props === null || props === void 0 ? void 0 : props.height) - (strokeWidth + (strokeWidth / 2)), strokeWidth: (_c = props.options) === null || _c === void 0 ? void 0 : _c.strokeWidth, stroke: ((_d = props.options) === null || _d === void 0 ? void 0 : _d.strokeColor) || (!((_e = props.options) === null || _e === void 0 ? void 0 : _e.fill) ? 'black' : undefined), rx: (_f = props.options) === null || _f === void 0 ? void 0 : _f.rounded, ry: (_g = props.options) === null || _g === void 0 ? void 0 : _g.rounded })));
};
exports.Rectangle = Rectangle;
exports.Rectangle.metadata = {
    width: 50,
    height: 50,
    options: {
        fill: 'String',
        strokeWidth: 'Number',
        strokeColor: 'String',
        rounded: 'Number'
    }
};
