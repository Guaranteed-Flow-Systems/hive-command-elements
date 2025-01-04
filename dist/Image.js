"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const react_1 = __importDefault(require("react"));
const Image = (props) => {
    return (react_1.default.createElement("img", { src: props.src }));
};
exports.Image = Image;
exports.Image.metadata = {
    options: {
        src: 'String'
    }
};
