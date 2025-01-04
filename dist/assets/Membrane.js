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
exports.Membrane = void 0;
const React = __importStar(require("react"));
const Membrane = (props) => (React.createElement("svg", Object.assign({ id: "membrane_svg__Layer_1", xmlns: "http://www.w3.org/2000/svg", x: 0, y: 0, viewBox: "0 0 283.46 283.46", xmlSpace: "preserve" }, props),
    React.createElement("style", null, ".membrane_svg__st0{fill:none;stroke:#4d4d4e;stroke-width:6.1609;stroke-miterlimit:10}"),
    React.createElement("path", { className: "membrane_svg__st0", d: "M6.25 10.09v267.73M19.88 10.09v267.73M33.52 10.09v267.73M47.16 10.09v267.73M60.8 10.09v267.73M74.43 10.09v267.73M88.07 10.09v267.73M101.71 10.09v267.73M6.25 10.09h95.46v267.73H6.25z" })));
exports.Membrane = Membrane;
exports.Membrane.metadata = {
    width: 50,
    height: 50
};
