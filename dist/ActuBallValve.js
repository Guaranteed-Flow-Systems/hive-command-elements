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
const SvgActuBallValve = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", xmlSpace: "preserve" }, props),
    React.createElement("radialGradient", { id: "actu_ball_valve_svg__a", cx: 71.409, cy: 67.223, r: 20.795, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0.019, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#actu_ball_valve_svg__a)", d: "m88.19 87.37-35.37-9.13a3.63 3.63 0 0 1-2.72-3.52V59.73c0-1.66 1.12-3.1 2.72-3.52l35.37-9.13c2.3-.59 4.54 1.14 4.54 3.52v33.25c-.01 2.37-2.25 4.11-4.54 3.52z" }),
    React.createElement("radialGradient", { id: "actu_ball_valve_svg__b", cx: 65.438, cy: 67.223, r: 20.795, gradientTransform: "matrix(-1 0 0 1 94.217 0)", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0.019, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#actu_ball_valve_svg__b)", d: "m12 87.37 35.37-9.13a3.63 3.63 0 0 0 2.72-3.52V59.73c0-1.66-1.12-3.1-2.72-3.52L12 47.08a3.633 3.633 0 0 0-4.54 3.52v33.25c0 2.37 2.24 4.11 4.54 3.52z" }),
    React.createElement("radialGradient", { id: "actu_ball_valve_svg__c", cx: 50.094, cy: 67.223, r: 16.656, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0.019, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("circle", { fill: "url(#actu_ball_valve_svg__c)", cx: 50.09, cy: 67.22, r: 16.66 }),
    React.createElement("path", { fill: "#4C4C4D", d: "M89.1 46.96c1.94 0 3.62 1.58 3.62 3.63v33.25c0 2.06-1.68 3.63-3.62 3.63-.3 0-.61-.04-.92-.12L60.5 80.22a16.562 16.562 0 0 1-10.41 3.66c-3.94 0-7.55-1.38-10.41-3.66L12 87.37c-.31.08-.61.12-.92.12-1.94 0-3.62-1.58-3.62-3.63V50.6c0-2.06 1.68-3.63 3.62-3.63.3 0 .61.04.92.12l27.68 7.15c2.85-2.29 6.47-3.66 10.41-3.66 3.94 0 7.55 1.38 10.41 3.66l27.68-7.15c.31-.09.62-.13.92-.13m0-3c-.56 0-1.12.07-1.67.21l-26.3 6.79c-3.24-2.2-7.11-3.4-11.04-3.4-3.93 0-7.79 1.2-11.04 3.4l-26.3-6.79c-.55-.14-1.11-.21-1.67-.21-1.74 0-3.39.68-4.64 1.91a6.552 6.552 0 0 0-1.98 4.73v33.25c0 3.66 2.97 6.63 6.62 6.63.56 0 1.12-.07 1.67-.21l26.3-6.79c3.24 2.2 7.11 3.4 11.04 3.4 3.93 0 7.79-1.2 11.04-3.4l26.3 6.79c.55.14 1.11.21 1.67.21 3.65 0 6.62-2.98 6.62-6.63V50.6c0-3.66-2.97-6.64-6.62-6.64z" }),
    React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M50.09 46.96V19.88" }),
    React.createElement("radialGradient", { id: "actu_ball_valve_svg__d", cx: 50.094, cy: 19.245, r: 5.073, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0.019, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "none", stroke: "url(#actu_ball_valve_svg__d)", strokeWidth: 3, strokeLinecap: "round", strokeMiterlimit: 10, d: "M44.58 19.24h11.03" }),
    React.createElement("radialGradient", { id: "actu_ball_valve_svg__e", cx: 50.094, cy: 19.245, r: 7.09, gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { offset: 0.019, style: {
                stopColor: "#8d8c8e",
            } }),
        React.createElement("stop", { offset: 1, style: {
                stopColor: "#616264",
            } })),
    React.createElement("path", { fill: "url(#actu_ball_valve_svg__e)", d: "M44.58 23.02c-2.08 0-3.77-1.69-3.77-3.77s1.69-3.77 3.77-3.77h11.03c2.08 0 3.77 1.69 3.77 3.77s-1.69 3.77-3.77 3.77H44.58z" }),
    React.createElement("path", { fill: "#4C4C4D", d: "M55.61 16.97c1.26 0 2.27 1.02 2.27 2.27s-1.02 2.27-2.27 2.27H44.58c-1.26 0-2.27-1.02-2.27-2.27s1.02-2.27 2.27-2.27h11.03m0-3H44.58c-2.91 0-5.27 2.37-5.27 5.27s2.37 5.27 5.27 5.27h11.03c2.91 0 5.27-2.37 5.27-5.27s-2.36-5.27-5.27-5.27z" })));
exports.default = SvgActuBallValve;
