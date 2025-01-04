"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Button = (props) => {
    var _a, _b, _c, _d;
    return (react_1.default.createElement(material_1.Button, { variant: "contained", fullWidth: true, color: "primary", 
        // disabled={props.options?.disabled}
        onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick, sx: {
            opacity: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.disabled) ? '0.6' : 1,
            height: '100%',
            // background: props.color,
            border: 0,
            borderRadius: '0.375em',
            color: (_c = props.options) === null || _c === void 0 ? void 0 : _c.textColor,
            cursor: 'pointer',
            // margin: '1.5em auto',
            padding: '0.5em 1em',
        } },
        react_1.default.createElement("span", { style: {
                display: 'block'
            }, tabIndex: -1 }, ((_d = props.options) === null || _d === void 0 ? void 0 : _d.text) || "Button")));
};
exports.Button = Button;
exports.Button.metadata = {
    width: 125,
    height: 50,
    options: {
        text: 'String',
        textColor: 'String',
        disabled: 'Boolean',
        onClick: 'Function'
    }
};
