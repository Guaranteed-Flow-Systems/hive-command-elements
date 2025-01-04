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
exports.TextField = void 0;
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
const react_1 = __importStar(require("react"));
const TextField = (props) => {
    var _a, _b, _c, _d, _e;
    const [editing, setEditing] = (0, react_1.useState)(false);
    const [value, setValue] = (0, react_1.useState)((_a = props.options) === null || _a === void 0 ? void 0 : _a.value);
    (0, react_1.useEffect)(() => {
        var _a;
        if (!editing)
            setValue((_a = props.options) === null || _a === void 0 ? void 0 : _a.value);
    }, [(_b = props.options) === null || _b === void 0 ? void 0 : _b.value, editing]);
    const changeValue = () => {
        var _a, _b;
        (_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value);
        setEditing(false);
    };
    return (react_1.default.createElement(material_1.Box, { sx: { flex: 1, display: 'flex' } },
        react_1.default.createElement(material_1.TextField, { size: "small", fullWidth: true, onChange: (e) => {
                setEditing(true);
                setValue(e.target.value);
            }, value: value || '', type: (_c = props.options) === null || _c === void 0 ? void 0 : _c.type, InputProps: {
                endAdornment: (editing && value != ((_d = props.options) === null || _d === void 0 ? void 0 : _d.value)) ? react_1.default.createElement(material_1.InputAdornment, { position: "end" },
                    react_1.default.createElement(material_1.IconButton, { onClick: () => changeValue(), size: "small" },
                        react_1.default.createElement(icons_material_1.Check, { fontSize: "inherit" }))) : undefined
            }, label: (_e = props.options) === null || _e === void 0 ? void 0 : _e.label })));
};
exports.TextField = TextField;
exports.TextField.metadata = {
    width: 150,
    height: 40,
    options: {
        onChange: 'Function',
        value: 'String',
        type: 'String',
        label: 'String'
    }
};
