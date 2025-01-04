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
exports.SquareTank = void 0;
const React = __importStar(require("react"));
const SquareTank = (props) => (React.createElement("svg", { viewBox: "54.726 24.16 150.619 150.684", xmlns: "http://www.w3.org/2000/svg", role: "img", preserveAspectRatio: "none", style: {
        width: '100%',
        height: '100%'
    } },
    React.createElement("defs", null,
        React.createElement("style", null, ".tank_sq_sm_svg__st2{fill:none;stroke:#383739;stroke-width:1.8221;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}")),
    React.createElement("linearGradient", { id: "tank_sq_sm_svg__SVGID_1_", gradientUnits: "userSpaceOnUse", x1: 176.478, y1: 180.002, x2: 83.522, y2: 18.998 },
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
    React.createElement("linearGradient", { id: "tank_sq_sm_svg__SVGID_2_", gradientUnits: "userSpaceOnUse", x1: 130, y1: 37.61, x2: 130, y2: 161.39 },
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
    React.createElement("path", { d: "M182.7 173.1H77.3c-11.6 0-20.9-9.4-20.9-20.9V46.8c0-11.6 9.4-20.9 20.9-20.9h105.5c11.6 0 20.9 9.4 20.9 20.9v105.5c-.1 11.5-9.4 20.8-21 20.8z", style: {
            fill: "url(#tank_sq_sm_svg__SVGID_1_)",
        } }),
    React.createElement("path", { d: "M183.2 161.4H76.8c-4.8 0-8.7-3.9-8.7-8.7V46.3c0-4.8 3.9-8.7 8.7-8.7h106.3c4.8 0 8.7 3.9 8.7 8.7v106.3c.1 4.9-3.8 8.8-8.6 8.8z", style: {
            fill: "url(#tank_sq_sm_svg__SVGID_2_)",
        } }),
    React.createElement("path", { className: "tank_sq_sm_svg__st2", d: "M182.7 173.1H77.3c-11.6 0-20.9-9.4-20.9-20.9V46.8c0-11.6 9.4-20.9 20.9-20.9h105.5c11.6 0 20.9 9.4 20.9 20.9v105.5c-.1 11.5-9.4 20.8-21 20.8z" }),
    React.createElement("path", { className: "tank_sq_sm_svg__st2", d: "M183.2 161.4H76.8c-4.8 0-8.7-3.9-8.7-8.7V46.3c0-4.8 3.9-8.7 8.7-8.7h106.3c4.8 0 8.7 3.9 8.7 8.7v106.3c.1 4.9-3.8 8.8-8.6 8.8z" })));
exports.SquareTank = SquareTank;
exports.SquareTank.metadata = {
    type: 'tank',
    width: 100,
    height: 100
};
