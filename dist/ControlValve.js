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
exports.ControlValve = void 0;
const React = __importStar(require("react"));
const ControlValve = (props) => {
    var _a, _b, _c;
    return (React.createElement("svg", Object.assign({ viewBox: "0 0 20 20", onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick }, props),
        React.createElement("rect", { fill: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.fill) || '#4d4d4e', width: 20, height: 20, rx: 2.5 }),
        React.createElement("rect", { width: 3, height: 18, x: 8.5, y: 1, fill: "#fff", rx: 1.5, style: {
                transformOrigin: "50% 50%",
                transformBox: "content-box",
                transform: `rotate(${(_c = props.options) === null || _c === void 0 ? void 0 : _c.angle}deg)`
            } })));
};
exports.ControlValve = ControlValve;
exports.ControlValve.metadata = {
    type: 'valve',
    width: 30,
    height: 30,
    options: {
        angle: 'Number',
        onClick: 'Function',
        fill: 'String'
    },
    ports: [
        {
            key: 'outlet',
            type: 'source',
            momentum: 1,
            x: '80%',
            y: '30%',
            rotation: 180
        },
        {
            key: 'inlet',
            type: 'target',
            momentum: -1,
            x: '-10%',
            y: '30%'
        }
    ]
};
