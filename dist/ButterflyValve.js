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
exports.ButterflyValve = void 0;
const React = __importStar(require("react"));
const ButterflyValve = (props) => {
    var _a, _b, _c;
    const open = ((_a = props.options) === null || _a === void 0 ? void 0 : _a.open) || false;
    // 'drop-shadow(0px 0px 5px red)' : 
    //'drop-shadow(0px 0px 5px green)'
    const shadowStyle = React.useMemo(() => {
        var _a;
        return ((_a = props.options) === null || _a === void 0 ? void 0 : _a.fault) == true ?
            'rgba(255, 0, 0, 0.3)' :
            // open == true ?  'rgba(0, 255, 0, 0.3)': 
            undefined;
    }, [props.options, open]);
    return (React.createElement("svg", Object.assign({ viewBox: "0 -0.092 80.245 51.312", xmlns: "http://www.w3.org/2000/svg", role: "img", onClick: (_b = props.options) === null || _b === void 0 ? void 0 : _b.onClick }, props, { style: {
            filter: ((_c = props.options) === null || _c === void 0 ? void 0 : _c.fault) ? 'url(#valve-fault)' : undefined,
            // background: shadowStyle // props.options?.fault == true ? 'drop-shadow(0px 0px 5px red)' : open == true ? 'drop-shadow(0px 0px 5px green)' : undefined,
        } }),
        React.createElement("defs", null,
            React.createElement("filter", { id: "valve-fault", x: "0", y: "0" },
                React.createElement("feDropShadow", { dx: "0", dy: "0", stdDeviation: "5", floodColor: "red" }))),
        React.createElement("linearGradient", { id: "butterfly_valve_svg__a", gradientUnits: "userSpaceOnUse", x1: -895.648, y1: 124.468, x2: -895.648, y2: 173.161, gradientTransform: "matrix(-1 0 0 1 -823.464 -123.158)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#333334",
                } }),
            React.createElement("stop", { offset: 0.501, style: {
                    stopColor: "#7d7e81",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#333334",
                } })),
        React.createElement("linearGradient", { id: "butterfly_valve_svg__b", gradientUnits: "userSpaceOnUse", x1: -831.563, y1: 124.468, x2: -831.563, y2: 173.161, gradientTransform: "matrix(-1 0 0 1 -823.464 -123.158)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#333334",
                } }),
            React.createElement("stop", { offset: 0.501, style: {
                    stopColor: "#7d7e81",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#333334",
                } })),
        React.createElement("radialGradient", { id: "butterfly_valve_svg__c", cx: 48.595, cy: 66.296, r: 5.547, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(-9.265 -40.451)" },
            React.createElement("stop", { offset: 0.019, style: {
                    stopColor: "#8d8c8e",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616264",
                } })),
        React.createElement("path", { fill: "url(#butterfly_valve_svg__a)", d: "M64.325 1.209h15.72v48.87h-15.72z" }),
        React.createElement("path", { fill: "url(#butterfly_valve_svg__b)", d: "M.245 1.209h15.71v48.87H.245z" }),
        React.createElement("path", { style: {
                transformOrigin: '50% 50%',
                transformBox: 'fill-box',
                transform: `translateY(${open == true ? -1 : 0}px) rotate(${open == true ? '-44' : '45'}deg)`,
            }, fill: "none", stroke: "#4C4C4D", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "m25.455 12.419 27.75 27.75" }),
        React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M15.375 1.689h47.91v47.91h-47.91z" }),
        React.createElement("circle", { fill: "url(#butterfly_valve_svg__c)", cx: 39.335, cy: 25.849, r: 5.55 })));
};
exports.ButterflyValve = ButterflyValve;
exports.ButterflyValve.metadata = {
    type: 'valve',
    width: 40,
    height: 25,
    options: {
        open: 'Boolean',
        fault: 'Boolean',
        onClick: 'Function'
    },
    ports: [
        {
            key: 'outlet',
            momentum: 1,
            x: '90%',
            y: '30%',
            rotation: 180
        },
        {
            key: 'inlet',
            momentum: -1,
            x: '-10%',
            y: '30%'
        }
    ]
};
