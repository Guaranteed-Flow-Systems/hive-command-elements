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
const DosingPump = (props) => (React.createElement("svg", Object.assign({ id: "dose_pump_svg__Layer_1", xmlns: "http://www.w3.org/2000/svg", x: 0, y: 0, viewBox: "0 0 283.46 283.46", xmlSpace: "preserve" }, props),
    React.createElement("style", null, ".dose_pump_svg__st0{fill:#4d4d4e}"),
    React.createElement("path", { className: "dose_pump_svg__st0", d: "M113.02 174.32c4.39 0 8.25-3.83 8.25-8.25v-61.72c0-4.39-3.86-8.25-8.25-8.25s-8.25 3.83-8.25 8.25v61.72c0 4.38 3.86 8.25 8.25 8.25z" }),
    React.createElement("circle", { className: "dose_pump_svg__st0", cx: 113.02, cy: 204.11, r: 13.78 }),
    React.createElement("path", { className: "dose_pump_svg__st0", d: "M220.24 182.51V46.94c0-24.26-19.84-44.1-44.1-44.1H48.29c-24.26 0-44.1 19.84-44.1 44.1v189.59c0 24.26 19.84 44.1 44.1 44.1h220.44v-98.12h-48.49zm-106.13 60.16h-5.5c-36.37-1.11-61.16-40.24-47.93-75.5l7.73-19.28 41.35-110.76c1.08-4.95 7.17-4.95 8.81 0l41.35 110.76 4.95 19.28c10.42 34.19-12.72 72.75-50.76 75.5z" })));
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
