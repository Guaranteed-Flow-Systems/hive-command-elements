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
const Membrane = (props) => (React.createElement("svg", { id: "membrane_svg__Layer_1", xmlns: "http://www.w3.org/2000/svg", x: 0, y: 0, viewBox: "0 0 109 283.5", xmlSpace: "preserve" },
    React.createElement("style", null, ".membrane_svg__st0{fill:none;stroke:#4d4d4e;stroke-width:6.1609;stroke-miterlimit:10}"),
    React.createElement("path", { className: "membrane_svg__st0", d: "M6.2 10.1v267.7M19.9 10.1v267.7M33.5 10.1v267.7M47.2 10.1v267.7M60.8 10.1v267.7M74.4 10.1v267.7M88.1 10.1v267.7M101.7 10.1v267.7M6.2 10.1h95.5v267.7H6.2z" })));
exports.Membrane = Membrane;
exports.Membrane.metadata = {
    width: 50,
    height: 50
};
