"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Dropdown = (props) => {
    var _a, _b, _c;
    console.log("Options", props.options);
    return (react_1.default.createElement(material_1.Autocomplete, { options: ((_a = props.options) === null || _a === void 0 ? void 0 : _a.options) || [], value: (_b = props.options) === null || _b === void 0 ? void 0 : _b.value, onChange: ((_c = props.options) === null || _c === void 0 ? void 0 : _c.onChange) && ((e, newValue) => { var _a; return (_a = props.options) === null || _a === void 0 ? void 0 : _a.onChange(newValue); }), renderInput: (params) => { var _a; return react_1.default.createElement(material_1.TextField, Object.assign({}, params, { size: "small", label: (_a = props.options) === null || _a === void 0 ? void 0 : _a.label })); } }));
};
exports.Dropdown = Dropdown;
exports.Dropdown.metadata = {
    width: 125,
    height: 50,
    options: {
        label: 'String',
        options: '[String]',
        value: 'String',
        onChange: 'Function'
    }
};
