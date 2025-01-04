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
exports.Valve = void 0;
const React = __importStar(require("react"));
const Valve = (props) => {
    var _a, _b;
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 59.4", xmlSpace: "preserve", role: "img", style: {
            filter: ((_a = props.options) === null || _a === void 0 ? void 0 : _a.fault) ? 'url(#valve-fault)' : undefined,
            transform: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.open) != 'true' ? 'rotate(90deg)' : undefined
        } }, props),
        React.createElement("defs", null,
            React.createElement("filter", { id: "valve-fault", x: "0", y: "0" },
                React.createElement("feDropShadow", { dx: "0", dy: "0", stdDeviation: "5", floodColor: "red" }))),
        React.createElement("linearGradient", { id: "Valve_svg__a", gradientUnits: "userSpaceOnUse", x1: 23.143, y1: 46.326, x2: 57.775, y2: 11.694 },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#707174",
                } }),
            React.createElement("stop", { offset: 0.501, style: {
                    stopColor: "#d4d4d6",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#707174",
                } })),
        React.createElement("path", { fill: "url(#Valve_svg__a)", d: "M28.9 48.7H52c4.5 0 8.1-3.6 8.1-8.1V17.4c0-4.5-3.6-8.1-8.1-8.1H28.9c-4.5 0-8.1 3.6-8.1 8.1v23.1c0 4.6 3.6 8.2 8.1 8.2z" }),
        React.createElement("linearGradient", { id: "Valve_svg__b", gradientUnits: "userSpaceOnUse", x1: 20.264, y1: 29.01, x2: 60.653, y2: 29.01 },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#383739",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#383838",
                } })),
        React.createElement("path", { fill: "none", stroke: "url(#Valve_svg__b)", strokeMiterlimit: 10, d: "M28.9 48.7H52c4.5 0 8.1-3.6 8.1-8.1V17.4c0-4.5-3.6-8.1-8.1-8.1H28.9c-4.5 0-8.1 3.6-8.1 8.1v23.1c0 4.6 3.6 8.2 8.1 8.2z" }),
        React.createElement("linearGradient", { id: "Valve_svg__c", gradientUnits: "userSpaceOnUse", x1: -235.002, y1: 1699.012, x2: -223.144, y2: 1699.012, gradientTransform: "rotate(90 740.62 998.702)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#554b62",
                } }),
            React.createElement("stop", { offset: 0.5, style: {
                    stopColor: "#ada9b8",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#554b62",
                } })),
        React.createElement("path", { fill: "none", stroke: "url(#Valve_svg__c)", strokeWidth: 11.858, strokeLinejoin: "round", strokeMiterlimit: 10, d: "M70.3 29H10.4" })));
};
exports.Valve = Valve;
exports.Valve.metadata = {
    type: 'valve',
    width: 50,
    height: 50,
    ports: [
        {
            key: 'outlet',
            momentum: 1,
            x: '70%',
            y: '37%',
            rotation: 180
        },
        {
            key: 'inlet',
            momentum: -1,
            x: '0%',
            y: '37%'
        }
    ]
};
