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
const React = __importStar(require("react"));
const SvgTank = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 368.6 207.8", xmlSpace: "preserve" }, props),
    React.createElement("linearGradient", { id: "tank_svg__a", gradientUnits: "userSpaceOnUse", x1: 197.436, y1: 10.222, x2: 197.436, y2: 165.761, gradientTransform: "matrix(-1 0 0 1 382.135 0)" },
        React.createElement("stop", { offset: 0.043, style: {
                stopColor: "#787a7c",
            } }),
        React.createElement("stop", { offset: 0.164, style: {
                stopColor: "#929497",
            } }),
        React.createElement("stop", { offset: 0.315, style: {
                stopColor: "#a9abad",
            } }),
        React.createElement("stop", { offset: 0.495, style: {
                stopColor: "#a9abad",
            } }),
        React.createElement("stop", { offset: 0.663, style: {
                stopColor: "#7c7e80",
            } }),
        React.createElement("stop", { offset: 0.856, style: {
                stopColor: "#383838",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#tank_svg__a)", d: "M48.5 10.2h272.4c21.4 0 38.7 34.8 38.7 77.8s-17.3 77.8-38.7 77.8H48.5C27.1 165.8 9.8 131 9.8 88s17.3-77.8 38.7-77.8z" }),
    React.createElement("radialGradient", { id: "tank_svg__b", cx: 60.846, cy: 87.992, r: 40.005, fx: 40.562, fy: 88.036, gradientTransform: "matrix(-1 0 0 1.9052 382.135 -79.65)", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#b8b9bb",
            } }),
        React.createElement("stop", { offset: 0.108, style: {
                stopColor: "#b3b5b7",
            } }),
        React.createElement("stop", { offset: 0.225, style: {
                stopColor: "#a9abad",
            } }),
        React.createElement("stop", { offset: 0.253, style: {
                stopColor: "#a4a6a8",
            } }),
        React.createElement("stop", { offset: 0.75, style: {
                stopColor: "#727274",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("ellipse", { fill: "url(#tank_svg__b)", cx: 321.3, cy: 88, rx: 38.7, ry: 77.8 }),
    React.createElement("linearGradient", { id: "tank_svg__c", gradientUnits: "userSpaceOnUse", x1: 52.379, y1: 8.122, x2: 52.379, y2: 167.861 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#383739",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#7e7f81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383739",
            } })),
    React.createElement("path", { fill: "none", stroke: "url(#tank_svg__c)", strokeWidth: 2.028, strokeLinecap: "round", strokeMiterlimit: 10, d: "M72 166.8c-21.7 0-39.2-35.3-39.2-78.9S50.3 9.1 72 9.1" }),
    React.createElement("linearGradient", { id: "tank_svg__d", gradientUnits: "userSpaceOnUse", x1: 321.289, y1: 9.222, x2: 321.289, y2: 166.761 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#383739",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#7e7f81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383739",
            } })),
    React.createElement("path", { fill: "none", stroke: "url(#tank_svg__d)", strokeWidth: 2, strokeLinecap: "round", strokeMiterlimit: 10, d: "M322.2 165.8c-21.4 0-38.7-34.8-38.7-77.8s17.3-77.8 38.7-77.8c0 0 36.8 4.7 36.8 77.8s-36.8 77.8-36.8 77.8z" }),
    React.createElement("linearGradient", { id: "tank_svg__e", gradientUnits: "userSpaceOnUse", x1: 275.649, y1: 8.122, x2: 275.649, y2: 167.861 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#383739",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#7e7f81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383739",
            } })),
    React.createElement("path", { fill: "none", stroke: "url(#tank_svg__e)", strokeWidth: 2.028, strokeLinecap: "round", strokeMiterlimit: 10, d: "M295.3 166.8c-21.7 0-39.2-35.3-39.2-78.9S273.7 9 295.3 9" }),
    React.createElement("linearGradient", { id: "tank_svg__f", gradientUnits: "userSpaceOnUse", x1: 28.266, y1: 8.122, x2: 28.266, y2: 167.861 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#383739",
            } }),
        React.createElement("stop", { offset: 0.501, style: {
                stopColor: "#7e7f81",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383739",
            } })),
    React.createElement("path", { fill: "none", stroke: "url(#tank_svg__f)", strokeWidth: 2.028, strokeLinecap: "round", strokeMiterlimit: 10, d: "M47.9 166.8c-21.7 0-39.2-35.3-39.2-78.9S26.2 9.1 47.9 9.1" }),
    React.createElement("linearGradient", { id: "tank_svg__g", gradientUnits: "userSpaceOnUse", x1: 60.312, y1: 169.711, x2: 118.307, y2: 169.711 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#a9abad",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383838",
            } })),
    React.createElement("path", { fill: "url(#tank_svg__g)", stroke: "#383739", strokeMiterlimit: 10, d: "M104.6 185H74.1v-37.4c0-3.8-3.1-6.9-6.9-6.9-3.8 0-6.9 3.1-6.9 6.9v51.1h58v-32.4h-13.7V185z" }),
    React.createElement("linearGradient", { id: "tank_svg__h", gradientUnits: "userSpaceOnUse", x1: 152.856, y1: 169.711, x2: 210.851, y2: 169.711 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#a9abad",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383838",
            } })),
    React.createElement("path", { fill: "url(#tank_svg__h)", stroke: "#383739", strokeMiterlimit: 10, d: "M197.1 185h-30.5v-37.4c0-3.8-3.1-6.9-6.9-6.9-3.8 0-6.9 3.1-6.9 6.9v51.1h58v-32.4h-13.7V185z" }),
    React.createElement("linearGradient", { id: "tank_svg__i", gradientUnits: "userSpaceOnUse", x1: 245.4, y1: 169.711, x2: 303.394, y2: 169.711 },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#a9abad",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#383838",
            } })),
    React.createElement("path", { fill: "url(#tank_svg__i)", stroke: "#383739", strokeMiterlimit: 10, d: "M289.6 185h-30.5v-37.4c0-3.8-3.1-6.9-6.9-6.9-3.8 0-6.9 3.1-6.9 6.9v51.1h58v-32.4h-13.7V185z" })));
exports.default = SvgTank;
