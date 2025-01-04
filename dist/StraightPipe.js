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
exports.StraightPipe = void 0;
const React = __importStar(require("react"));
const StraightPipe = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 39.8 139.5", xmlSpace: "preserve" },
    React.createElement("linearGradient", { id: "StraightPipe_svg__a", gradientUnits: "userSpaceOnUse", x1: 9.924, y1: 69.903, x2: 29.92, y2: 69.903 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#6f7173",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#d3d5d6",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#6f7173",
            } })),
    React.createElement("path", { fill: "url(#StraightPipe_svg__a)", d: "M9.9 9.9v120h20V9.9z" }),
    React.createElement("linearGradient", { id: "StraightPipe_svg__b", gradientUnits: "userSpaceOnUse", x1: -372.78, y1: 204.888, x2: -372.78, y2: 181.571, gradientTransform: "rotate(90 -86.57 299.722)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#333334",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#7d7e81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#333334",
            } })),
    React.createElement("path", { fill: "url(#StraightPipe_svg__b)", d: "M8.3 17.1V9.9h23.3v7.2z" }),
    React.createElement("linearGradient", { id: "StraightPipe_svg__c", gradientUnits: "userSpaceOnUse", x1: -259.999, y1: 204.888, x2: -259.999, y2: 181.571, gradientTransform: "rotate(90 -86.57 299.722)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#333334",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#7d7e81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#333334",
            } })),
    React.createElement("path", { fill: "url(#StraightPipe_svg__c)", d: "M8.3 129.9v-7.2h23.3v7.2z" })));
exports.StraightPipe = StraightPipe;
