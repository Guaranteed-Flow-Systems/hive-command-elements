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
    return (React.createElement("svg", { onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 283.46 283.46", xmlSpace: "preserve" },
        React.createElement("path", { d: "M278.27 240.51V42.95c0-20.85-16.9-37.75-37.75-37.75H42.95C22.1 5.2 5.2 22.1 5.2 42.95v197.56c0 20.85 16.9 37.75 37.75 37.75h197.56c20.85.01 37.76-16.9 37.76-37.75zm-158.61 1.21V41.74c0-12.19 9.88-22.07 22.07-22.07s22.07 9.88 22.07 22.07v199.98c0 12.19-9.88 22.07-22.07 22.07s-22.07-9.88-22.07-22.07z", style: {
                fill: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.fill) || "#4d4d4e",
                transformOrigin: '50% 50%',
                transformBox: 'fill-box',
                transform: `rotate(${((_c = props.options) === null || _c === void 0 ? void 0 : _c.open) == true ? '90' : '0'}deg)`,
            } })));
};
exports.ButterflyValve = ButterflyValve;
exports.ButterflyValve.metadata = {
    type: 'valve',
    width: 30,
    height: 30,
    options: {
        open: 'Boolean',
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
