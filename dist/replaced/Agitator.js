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
exports.Agitator = void 0;
const React = __importStar(require("react"));
const Agitator = (props) => {
    var _a;
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 89.9 90.1", xmlSpace: "preserve", onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick }, props),
        React.createElement("linearGradient", { id: "agitator_svg__a", gradientUnits: "userSpaceOnUse", x1: 44.44, y1: 23.806, x2: 44.44, y2: 10.236 },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#616264",
                } }),
            React.createElement("stop", { offset: 0.532, style: {
                    stopColor: "#8d8c8e",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616264",
                } })),
        React.createElement("path", { fill: "url(#agitator_svg__a)", stroke: "#4C4C4D", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M30.9 10.2H58v13.6H30.9z" }),
        React.createElement("linearGradient", { id: "agitator_svg__b", gradientUnits: "userSpaceOnUse", x1: 46.075, y1: 44.326, x2: 42.383, y2: 44.326 },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#3e3e3e",
                } }),
            React.createElement("stop", { offset: 0.112, style: {
                    stopColor: "#434343",
                } }),
            React.createElement("stop", { offset: 0.299, style: {
                    stopColor: "#505051",
                } }),
            React.createElement("stop", { offset: 0.5, style: {
                    stopColor: "#616365",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#3e3e3e",
                } })),
        React.createElement("path", { fill: "url(#agitator_svg__b)", stroke: "#4C4C4D", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M42.4 23.8h3.7v41h-3.7z" }),
        React.createElement("linearGradient", { id: "agitator_svg__c", gradientUnits: "userSpaceOnUse", x1: 2386.666, y1: 310.862, x2: 2402.69, y2: 294.839, gradientTransform: "matrix(.0472 .9989 .9989 -.0472 -391.812 -2305.785)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#3e3e3e",
                } }),
            React.createElement("stop", { offset: 0.373, style: {
                    stopColor: "#3f3f3f",
                } }),
            React.createElement("stop", { offset: 0.573, style: {
                    stopColor: "#434343",
                } }),
            React.createElement("stop", { offset: 0.732, style: {
                    stopColor: "#4a4a4a",
                } }),
            React.createElement("stop", { offset: 0.869, style: {
                    stopColor: "#535455",
                } }),
            React.createElement("stop", { offset: 0.991, style: {
                    stopColor: "#606263",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616365",
                } })),
        React.createElement("path", { fill: "url(#agitator_svg__c)", stroke: "#4C4C4D", strokeLinejoin: "round", strokeMiterlimit: 10, d: "m37.9 69.6-15.3-5.8c-2.3-.8-4.8-.4-6.6 1.2l-6.9 5.8c-1.2 1-.9 2.8.5 3.4l9.4 4c3.6 1.6 7.8 1.4 11.2-.5l8-4.3c1.4-.9 1.3-3.1-.3-3.8z" }),
        React.createElement("linearGradient", { id: "agitator_svg__d", gradientUnits: "userSpaceOnUse", x1: 2394.455, y1: 475.649, x2: 2410.478, y2: 459.625, gradientTransform: "matrix(-.0472 .9989 -.9989 -.0472 645.792 -2305.785)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#3e3e3e",
                } }),
            React.createElement("stop", { offset: 0.373, style: {
                    stopColor: "#3f3f3f",
                } }),
            React.createElement("stop", { offset: 0.573, style: {
                    stopColor: "#434343",
                } }),
            React.createElement("stop", { offset: 0.732, style: {
                    stopColor: "#4a4a4a",
                } }),
            React.createElement("stop", { offset: 0.869, style: {
                    stopColor: "#535455",
                } }),
            React.createElement("stop", { offset: 0.991, style: {
                    stopColor: "#606263",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616365",
                } })),
        React.createElement("path", { fill: "url(#agitator_svg__d)", stroke: "#4C4C4D", strokeLinejoin: "round", strokeMiterlimit: 10, d: "m51.1 69.6 15.3-5.8c2.3-.9 4.8-.4 6.6 1.1l6.9 5.8c1.2 1 .9 2.8-.5 3.4l-9.4 4c-3.6 1.6-7.8 1.4-11.2-.5l-8-4.3c-1.4-.8-1.3-3 .3-3.7z" }),
        React.createElement("linearGradient", { id: "agitator_svg__e", gradientUnits: "userSpaceOnUse", x1: 52.194, y1: 71.11, x2: 36.791, y2: 71.11 },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#616264",
                } }),
            React.createElement("stop", { offset: 0.532, style: {
                    stopColor: "#8d8c8e",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616264",
                } })),
        React.createElement("path", { fill: "url(#agitator_svg__e)", stroke: "#4C4C4D", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M36.8 64.3h15.4v13.6H36.8z" })));
};
exports.Agitator = Agitator;
exports.Agitator.metadata = {
    width: 50,
    height: 50,
    options: {
        on: 'Boolean',
        onClick: 'Boolean'
    }
};
