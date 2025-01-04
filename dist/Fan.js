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
exports.Fan = void 0;
const React = __importStar(require("react"));
const Fan = (props) => {
    var _a, _b, _c, _d, _e;
    return (React.createElement("svg", { onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 283.46 283.46", xmlSpace: "preserve" },
        React.createElement("path", { d: "M140.7 47.27c-56.43 0-102.18 45.75-102.18 102.18H2.84v102.18h139.22l-.05-.03c55.82-.71 100.86-46.16 100.86-102.15h37.04V47.27H140.7zm64.32 64.96c-37.22-10.12-43.28 25.08-43.28 25.08s-4.06-8.09-14.55-10.93c3.25-49.34 27.1-43.69 27.1-43.69s15.74 4.06 30.73 29.54zm-48.96 37.22c0 8.49-6.88 15.36-15.36 15.36-8.49 0-15.36-6.88-15.36-15.36 0-8.49 6.88-15.36 15.36-15.36s15.36 6.88 15.36 15.36zm-21.42 22.64c-3.25 49.34-27.1 43.69-27.1 43.69s-15.77-4.06-30.73-29.54c37.22 10.12 43.28-25.08 43.28-25.08s4.05 8.09 14.55 10.93zM99.85 87.13s11.33-11.71 40.85-11.71c-27.1 27.1 0 50.15 0 50.15s-9.31-.41-16.58 6.87c-41.26-27.51-24.27-45.31-24.27-45.31zm-23.05 25.1c9.71 37.22 43.28 25.08 43.28 25.08s-4.84 7.68-2.44 17.8c-44.5 21.83-51.37-1.62-51.37-1.62s-4.05-15.37 10.53-41.26zm104.74 99.11s-10.9 11.71-40.85 11.71c27.1-27.1 0-50.15 0-50.15s9.31.41 16.58-6.87c41.26 27.52 24.27 45.31 24.27 45.31zm23.48-25.1c-9.71-37.22-43.28-25.08-43.28-25.08s4.84-7.68 2.44-17.8c44.5-21.83 51.37 1.62 51.37 1.62s4.02 15.78-10.53 41.26z", style: {
                // fill: "#4d4d4e",
                fill: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.fill) || (!((_c = props.options) === null || _c === void 0 ? void 0 : _c.stroke)) ? "#4d4d4e" : 'none',
                stroke: (_d = props.options) === null || _d === void 0 ? void 0 : _d.stroke,
                strokeWidth: ((_e = props.options) === null || _e === void 0 ? void 0 : _e.stroke) ? '5px' : undefined
            } })));
};
exports.Fan = Fan;
exports.Fan.metadata = {
    width: 50,
    height: 50,
    options: {
        on: 'Boolean',
        fill: 'String',
        stroke: 'String',
        onClick: 'Function'
    },
    ports: [
        {
            key: 'outlet',
            momentum: 1,
            x: '85%',
            y: '20%',
            rotation: 180
        },
        {
            key: 'inlet',
            momentum: -1,
            x: '-5%',
            y: '58%'
        }
    ]
};
