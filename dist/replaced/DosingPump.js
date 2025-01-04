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
exports.DosingPump = void 0;
const React = __importStar(require("react"));
const DosingPump = (props) => {
    var _a, _b, _c;
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", xmlSpace: "preserve", onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick, style: {
            filter: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.fault) ? 'url(#pump-fault)' : undefined,
        } }, props),
        React.createElement("defs", null,
            React.createElement("filter", { id: "pump-fault", x: "0", y: "0" },
                React.createElement("feDropShadow", { dx: "0", dy: "0", stdDeviation: "5", floodColor: "red" }))),
        React.createElement("linearGradient", { id: "dosing_pump_svg__a", gradientUnits: "userSpaceOnUse", x1: 4.17, y1: -552.102, x2: 79.692, y2: -627.624, gradientTransform: "matrix(1 0 0 -1 0 -540)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#616365",
                } }),
            React.createElement("stop", { offset: 0.496, style: {
                    stopColor: "#a0a0a0",
                } }),
            React.createElement("stop", { offset: 0.552, style: {
                    stopColor: "#828284",
                } }),
            React.createElement("stop", { offset: 0.704, style: {
                    stopColor: "#6f7072",
                } }),
            React.createElement("stop", { offset: 0.855, style: {
                    stopColor: "#656668",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616365",
                } })),
        React.createElement("path", { fill: "url(#dosing_pump_svg__a)", d: "M63.76 2.42H20.07C11.78 2.42 5 9.2 5 17.49v64.79c0 8.29 6.78 15.07 15.07 15.07h43.69c8.29 0 15.07-6.78 15.07-15.07V17.49c0-8.48-6.78-15.07-15.07-15.07z" }),
        React.createElement("linearGradient", { id: "dosing_pump_svg__b", gradientUnits: "userSpaceOnUse", x1: -865.216, y1: 464.528, x2: -865.216, y2: 498.051, gradientTransform: "matrix(-1 0 0 1 -794.96 -400.757)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#616365",
                } }),
            React.createElement("stop", { offset: 0.532, style: {
                    stopColor: "#a0a0a0",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616365",
                } })),
        React.createElement("path", { fill: "url(#dosing_pump_svg__b)", d: "M45.11 97.34s.75-33.52 33.52-33.52H95.4v33.52H45.11z" }),
        React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeMiterlimit: 10, d: "M95.4 63.82H78.83V17.49c0-8.29-6.78-15.07-15.07-15.07H20.07C11.78 2.42 5 9.2 5 17.49v64.79c0 8.29 6.78 15.07 15.07 15.07H95.4V63.82z" }),
        React.createElement("linearGradient", { id: "dosing_pump_svg__c", gradientUnits: "userSpaceOnUse", x1: -40.816, y1: 53.374, x2: 130.605, y2: 53.374, gradientTransform: "matrix(1 0 0 -1 0 102)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#383638",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#383838",
                } })),
        React.createElement("path", { fill: ((_c = props.options) === null || _c === void 0 ? void 0 : _c.on) == true ? 'cyan' : "url(#dosing_pump_svg__c)", d: "m59.9 58.58-1.69-6.59-14.13-37.85c-.56-1.69-2.64-1.69-3.01 0L26.94 51.99l-2.64 6.59C19.78 70.63 28.25 84 40.68 84.38h1.88c13-.94 20.91-14.12 17.34-25.8zM39.37 37.11c0-1.51 1.32-2.82 2.82-2.82s2.82 1.32 2.82 2.82V58.2c0 1.51-1.32 2.82-2.82 2.82s-2.82-1.32-2.82-2.82V37.11zm2.82 38.8c-2.64 0-4.71-2.07-4.71-4.71s2.07-4.71 4.71-4.71 4.71 2.07 4.71 4.71-2.07 4.71-4.71 4.71z" })));
};
exports.DosingPump = DosingPump;
exports.DosingPump.metadata = {
    width: 50,
    height: 50,
    type: 'dosing-pump',
    options: {
        on: 'Boolean',
        fault: 'Boolean',
        onClick: 'Function'
    },
    ports: [
        {
            key: 'outlet',
            momentum: 1,
            x: '80%',
            y: '70%',
            rotation: 180
        },
        {
            key: 'inlet',
            momentum: -1,
            x: '-10%',
            y: '70%'
        }
    ]
};
