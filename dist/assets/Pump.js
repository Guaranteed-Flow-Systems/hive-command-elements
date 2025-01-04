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
exports.Pump = void 0;
const React = __importStar(require("react"));
const Pump = (props) => (React.createElement("svg", Object.assign({ id: "pump_svg__Layer_1", xmlns: "http://www.w3.org/2000/svg", x: 0, y: 0, viewBox: "0 0 283.46 283.46", xmlSpace: "preserve" }, props),
    React.createElement("style", null, ".pump_svg__st0{fill:#4d4d4e}"),
    React.createElement("path", { className: "pump_svg__st0", d: "m135.74 153.84-20.02-55.46c-.84-2.09-3.34-2.09-4.18 0l-20.02 55.46-3.34 9.6c-6.24 17.12 5.86 36.29 24.19 37.54h3.3c18.77-1.28 30.46-20.45 23.38-37.54l-3.31-9.6z" }),
    React.createElement("path", { className: "pump_svg__st0", d: "M113 40.85C52.55 40.85 3.32 90.05 3.32 150.5c0 33.36 15 62.98 38.35 83.4L22.52 256c-7.51 8.76-1.25 22.51 10.41 22.51h160.13c11.69 0 17.93-13.75 10.41-22.51l-19.17-22.1c23.35-20.02 38.38-50.04 38.38-83.4h54.22V40.85H113zM92.78 220.96c-23.76-6.67-42.53-25.44-49.2-49.2C27.71 114.65 78.6 64.2 135.31 80.04c23.76 6.67 42.53 25.44 49.2 49.2 15.87 57.12-35.02 107.56-91.73 91.72z" })));
exports.Pump = Pump;
exports.Pump.metadata = {
    width: 50,
    height: 50,
    type: 'pump',
    options: {
        'on': 'Boolean',
        'onClick': 'Function'
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
            y: '55%'
        }
    ]
};
