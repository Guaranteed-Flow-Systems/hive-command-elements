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
exports.Multimedia = void 0;
const React = __importStar(require("react"));
const Multimedia = (props) => {
    var _a, _b;
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", id: "Multimedia_svg__Layer_1", x: 0, y: 0, viewBox: "0 0 31.5 97.4", onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick }, props),
        React.createElement("style", null, `
      .Multimedia_svg__st1{
        fill:#393839;
      }
      
      .Multimedia_svg__tankHead{
        fill:${((_b = props.options) === null || _b === void 0 ? void 0 : _b.headFill) || '#393839'};
      }`),
        React.createElement("linearGradient", { id: "Multimedia_svg__SVGID_1_", x1: 1.218, x2: 30.153, y1: 48.7, y2: 48.7, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#393839",
                } }),
            React.createElement("stop", { offset: 0.5, style: {
                    stopColor: "#7e7f81",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#393839",
                } })),
        React.createElement("path", { d: "M15.7 15.2c-8 0-14.5 6.5-14.5 14.5V78.1c0 2.8 6.6 4.1 14.6 4.1s14.3-1.3 14.3-4.1V29.7c.1-8-6.4-14.5-14.4-14.5", style: {
                fill: "url(#Multimedia_svg__SVGID_1_)",
            } }),
        React.createElement("path", { d: "M29 1.9H2.5c-.7 0-1.3.6-1.3 1.3v5c0 .7.6 1.3 1.3 1.3h9.7v4c0 2 1.6 2.8 3.6 2.8s3.6-.8 3.6-2.8V9.4H29c.7 0 1.3-.6 1.3-1.3v-5c0-.6-.6-1.2-1.3-1.2", className: "Multimedia_svg__tankHead" }),
        React.createElement("path", { d: "M19.2 16.2h-6.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h6.9c.5 0 .9.4.9.9.1.5-.3.9-.9.9", style: {
                fill: "#a8a8a8",
            } }),
        React.createElement("linearGradient", { id: "Multimedia_svg__SVGID_2_", x1: 93.49, x2: 170.696, y1: 133.917, y2: 133.917, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#393839",
                } }),
            React.createElement("stop", { offset: 0.5, style: {
                    stopColor: "#7e7f81",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#393839",
                } })),
        React.createElement("path", { d: "M93.5 133v1.7c0-.3 0-.5.1-.8-.1-.2-.1-.5-.1-.9", style: {
                fill: "url(#Multimedia_svg__SVGID_2_)",
            } }),
        React.createElement("linearGradient", { id: "Multimedia_svg__SVGID_3_", x1: 74.749, x2: 193.436, y1: 133.917, y2: 133.917, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#393839",
                } }),
            React.createElement("stop", { offset: 0.5, style: {
                    stopColor: "#7e7f81",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#393839",
                } })),
        React.createElement("path", { d: "M93.5 133v1.7c0-.3 0-.5.1-.8-.1-.2-.1-.5-.1-.9", style: {
                fill: "url(#Multimedia_svg__SVGID_3_)",
            } }),
        React.createElement("linearGradient", { id: "Multimedia_svg__SVGID_4_", x1: 1.218, x2: 30.153, y1: 86.815, y2: 86.815, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#393839",
                } }),
            React.createElement("stop", { offset: 0.5, style: {
                    stopColor: "#7e7f81",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#393839",
                } })),
        React.createElement("path", { d: "M15.8 82.2c-8 0-14.6-1.3-14.6-4.1v13.4c0 2.8 6.6 4.1 14.6 4.1s14.3-1.3 14.3-4.1V78.1c.1 2.8-6.3 4.1-14.3 4.1", style: {
                fill: "url(#Multimedia_svg__SVGID_4_)",
            } }),
        React.createElement("path", { d: "M15.8 82.2c-8 0-14.6-1.3-14.6-4.1v13.4c0 2.8 6.6 4.1 14.6 4.1s14.3-1.3 14.3-4.1V78.1c.1 2.8-6.3 4.1-14.3 4.1", className: "Multimedia_svg__st1" })));
};
exports.Multimedia = Multimedia;
exports.Multimedia.metadata = {
    type: 'multimedia',
    width: 50,
    height: 150,
    options: {
        headFill: "String",
        onClick: "Function"
    },
    ports: [
        {
            key: 'outlet',
            momentum: 1,
            x: '83%',
            y: '2%',
            rotation: 180
        },
        {
            key: 'inlet',
            momentum: -1,
            x: '5%',
            y: '2%'
        }
    ]
};
