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
exports.Sump = void 0;
const React = __importStar(require("react"));
const Sump = (props) => (React.createElement("svg", Object.assign({ id: "sump_svg__Layer_1", xmlns: "http://www.w3.org/2000/svg", x: 0, y: 0, viewBox: "0 0 283.46 283.46", xmlSpace: "preserve" }, props),
    React.createElement("style", null, ".sump_svg__st0{fill:#4d4d4e}"),
    React.createElement("path", { className: "sump_svg__st0", d: "M209.23 238.18c22.1-18.95 36.31-47.37 36.31-78.96 0-57.24-46.58-103.82-103.82-103.82V3.69H37.92v155.53c0 31.59 14.21 59.6 36.31 78.96l-18.17 21.31c-7.1 8.3-1.19 21.31 9.87 21.31H217.5c11.06 0 16.97-13.01 9.87-21.31l-18.14-21.31zm-87.63-13.01c-22.51-6.32-40.27-24.08-46.58-46.58-14.99-54.09 33.16-101.84 86.85-86.85 22.51 6.32 40.27 24.08 46.58 46.58 14.99 54.09-33.16 101.84-86.85 86.85z" }),
    React.createElement("path", { className: "sump_svg__st0", d: "m162.3 161.61-18.95-52.49c-.82-1.98-3.17-1.98-3.96 0l-18.95 52.49-3.14 9.08c-5.94 16.19 5.5 34.33 22.88 35.52h3.14c17.76-1.19 28.79-19.36 22.13-35.52l-3.15-9.08z" })));
exports.Sump = Sump;
exports.Sump.metadata = {
    width: 50,
    height: 50
};
