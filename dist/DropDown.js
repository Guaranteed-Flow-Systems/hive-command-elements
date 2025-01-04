"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Dropdown = (props) => {
    var _a, _b, _c, _d, _e, _f;
    return (react_1.default.createElement(material_1.FormControl, { fullWidth: true, size: "small" },
        react_1.default.createElement(material_1.InputLabel, null, (_a = props.options) === null || _a === void 0 ? void 0 : _a.label),
        react_1.default.createElement(material_1.Select, { label: (_b = props.options) === null || _b === void 0 ? void 0 : _b.label, value: ((_c = props.options) === null || _c === void 0 ? void 0 : _c.value) || '', onChange: ((_d = props.options) === null || _d === void 0 ? void 0 : _d.onChange) && ((e) => { var _a; return (_a = props.options) === null || _a === void 0 ? void 0 : _a.onChange(e.target.value); }) }, (_f = (_e = props.options) === null || _e === void 0 ? void 0 : _e.options) === null || _f === void 0 ? void 0 : _f.map((option) => (react_1.default.createElement(material_1.MenuItem, { value: option }, option))))));
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
