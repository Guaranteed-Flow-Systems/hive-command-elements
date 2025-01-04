"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const Text = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (react_1.default.createElement(material_1.Box, { onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick, sx: {
            background: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.background) || (((_c = props.options) === null || _c === void 0 ? void 0 : _c.border) ? 'white' : undefined),
            paddingLeft: '6px',
            paddingRight: '6px',
            flex: 1,
            border: ((_d = props.options) === null || _d === void 0 ? void 0 : _d.border) ? '1px solid black' : undefined,
            borerRadius: ((_e = props.options) === null || _e === void 0 ? void 0 : _e.borderRadius) != undefined ? `${(_f = props.options) === null || _f === void 0 ? void 0 : _f.borderRadius}px` : undefined
        } },
        react_1.default.createElement(material_1.Typography, { fontWeight: ((_g = props.options) === null || _g === void 0 ? void 0 : _g.bold) ? 'bold' : undefined, fontSize: 'small' }, ((_h = props.options) === null || _h === void 0 ? void 0 : _h.text) || props.children || "Text")));
};
exports.Text = Text;
exports.Text.metadata = {
    width: 80,
    height: 20,
    options: {
        bold: 'Boolean',
        background: 'String',
        onClick: 'Function',
        text: 'String',
        border: 'Boolean',
        borderRadius: 'Number'
    }
};
