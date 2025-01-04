"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paper = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Paper = () => {
    return (react_1.default.createElement(material_1.Paper, { sx: { flex: 1, width: '100%', height: '100%' } }));
};
exports.Paper = Paper;
exports.Paper.metadata = {
    width: 100,
    height: 100
};
