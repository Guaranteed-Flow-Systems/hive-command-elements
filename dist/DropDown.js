"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const Dropdown = (props) => {
    var _a, _b, _c, _d, _e;
    console.log("Dropdown", props);
    const id = (0, react_1.useMemo)(() => (Math.random() * 100) + "", []);
    return (react_1.default.createElement(material_1.FormControl, { fullWidth: true, size: "small" },
        react_1.default.createElement(material_1.InputLabel, { id: id }, (_a = props.options) === null || _a === void 0 ? void 0 : _a.label),
        react_1.default.createElement(material_1.Select, { open: undefined, labelId: id, label: (_b = props.options) === null || _b === void 0 ? void 0 : _b.label, value: ((_c = props.options) === null || _c === void 0 ? void 0 : _c.value) || '', onChange: ((_d = props.options) === null || _d === void 0 ? void 0 : _d.onChange) && ((e) => { var _a; return (_a = props.options) === null || _a === void 0 ? void 0 : _a.onChange(e.target.value); }) }, (((_e = props.options) === null || _e === void 0 ? void 0 : _e.options) || []).map((option, ix) => (react_1.default.createElement(material_1.MenuItem, { key: ix, value: option }, option))))));
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
