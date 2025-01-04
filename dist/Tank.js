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
exports.Tank = void 0;
const React = __importStar(require("react"));
const Tank = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320.2 172", xmlSpace: "preserve", preserveAspectRatio: "none", style: {
        width: '100%',
        height: '100%'
    } },
    React.createElement("radialGradient", { id: "tank_svg__a", cx: -1208.551, cy: 14.219, r: 230.927, fx: -1375.519, fy: -27.903, gradientTransform: "matrix(-.9929 .01912 -.01477 -.7181 -1040.41 116.368)", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0.043, style: {
                stopColor: "#787a7c",
            } }),
        React.createElement("stop", { offset: 0.315, style: {
                stopColor: "#8e9192",
            } }),
        React.createElement("stop", { offset: 0.475, style: {
                stopColor: "#999c9e",
            } }),
        React.createElement("stop", { offset: 0.537, style: {
                stopColor: "#989a9c",
            } }),
        React.createElement("stop", { offset: 0.662, style: {
                stopColor: "#88888b",
            } }),
        React.createElement("stop", { offset: 0.861, style: {
                stopColor: "#383838",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { fill: "url(#tank_svg__a)", d: "M278 156.7H40.7c-16.3 0-29.4-13.2-29.4-29.4V38.8c0-16.3 13.2-29.4 29.4-29.4H278c16.3 0 29.4 13.2 29.4 29.4v88.5c.1 16.3-13.1 29.4-29.4 29.4z" }),
    React.createElement("linearGradient", { id: "tank_svg__b", gradientUnits: "userSpaceOnUse", x1: 159.35, y1: 889.4, x2: 159.35, y2: 1036.7, gradientTransform: "translate(0 -880)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.379, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 0.437, style: {
                stopColor: "#717374",
            } }),
        React.createElement("stop", { offset: 0.524, style: {
                stopColor: "#656769",
            } }),
        React.createElement("stop", { offset: 0.613, style: {
                stopColor: "#616365",
            } }),
        React.createElement("stop", { offset: 0.808, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 0.828, style: {
                stopColor: "#868889",
            } }),
        React.createElement("stop", { offset: 0.884, style: {
                stopColor: "#999b9c",
            } }),
        React.createElement("stop", { offset: 0.942, style: {
                stopColor: "#a4a7a8",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#a8abac",
            } })),
    React.createElement("path", { fill: "url(#tank_svg__b)", d: "M278 156.7H40.7c-16.3 0-29.4-13.2-29.4-29.4V38.8c0-16.3 13.2-29.4 29.4-29.4H278c16.3 0 29.4 13.2 29.4 29.4v88.5c.1 16.3-13.1 29.4-29.4 29.4z" }),
    React.createElement("linearGradient", { id: "tank_svg__c", gradientUnits: "userSpaceOnUse", x1: 159.35, y1: 43.3, x2: 159.35, y2: 190.6, gradientTransform: "matrix(1 0 0 -1 0 200)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 0.315, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.495, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.825, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { fill: "url(#tank_svg__c)", d: "M278 21.4c9.6 0 17.4 7.8 17.4 17.4v88.5c0 4.6-1.7 8.9-5 12.2s-7.7 5.1-12.4 5.1H40.7c-9.6 0-17.4-7.8-17.4-17.4V38.8c0-9.6 7.8-17.4 17.4-17.4H278m0-12H40.7c-16.2 0-29.4 13.1-29.4 29.4v88.5c0 16.2 13.1 29.4 29.4 29.4H278c16.3 0 29.5-13.1 29.4-29.4V38.8c0-16.2-13.1-29.4-29.4-29.4z" }),
    React.createElement("path", { fill: "none", stroke: "#383739", strokeWidth: 1.822, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M278 156.7H40.7c-16.3 0-29.4-13.2-29.4-29.4V38.8c0-16.3 13.2-29.4 29.4-29.4H278c16.3 0 29.4 13.2 29.4 29.4v88.5c.1 16.3-13.1 29.4-29.4 29.4z" }),
    React.createElement("path", { fill: "none", stroke: "#383739", strokeWidth: 1.822, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M277 143.7H42c-10.5 0-19-8.5-19-19V40.5c0-10.5 8.5-19 19-19h235c10.5 0 19 8.5 19 19v84.3c0 10.4-8.5 18.9-19 18.9z" }),
    React.createElement("linearGradient", { id: "tank_svg__d", gradientUnits: "userSpaceOnUse", x1: 157.6, y1: 56.8, x2: 157.6, y2: 146.9, gradientTransform: "matrix(1 0 0 -1 0 200)" },
        React.createElement("stop", { offset: 0, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 0.315, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.495, style: {
                stopColor: "#a8abac",
            } }),
        React.createElement("stop", { offset: 0.825, style: {
                stopColor: "#7d7f80",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616365",
            } })),
    React.createElement("path", { fill: "url(#tank_svg__d)", d: "M153.2 53.1h8.8v90.1h-8.8z" }),
    React.createElement("path", { fill: "#383739", d: "M161.5 53.6v89.1h-7.7V53.6h7.7m1-1h-9.7v91.1h9.7V52.6z" })));
exports.Tank = Tank;
exports.Tank.metadata = {
    type: 'tank',
    width: 200,
    height: 50
};
