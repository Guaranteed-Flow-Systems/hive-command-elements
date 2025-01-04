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
exports.TJoin = void 0;
const React = __importStar(require("react"));
const TJoin = (props) => (React.createElement("svg", { id: "TJoin_svg__Layer_1", xmlns: "http://www.w3.org/2000/svg", x: 0, y: 0, viewBox: "0 0 283.5 283.5", xmlSpace: "preserve" },
    React.createElement("style", null, ".TJoin_svg__st0{opacity:.8;fill:none;stroke:#626363;stroke-width:13;stroke-miterlimit:10}"),
    React.createElement("path", { className: "TJoin_svg__st0", d: "M277.5 56.9H5.7M170 221.2V113.5h107.5M5.7 113.5h107.8v107.7" }),
    React.createElement("path", { style: {
            fill: "#939393",
        }, d: "M6 58v54.3h108.6v108.6h54.3V112.3h108.6V58z" })));
exports.TJoin = TJoin;
exports.TJoin.metadata = {
    width: 40,
    height: 30,
    ports: [
        {
            key: 'left-hand',
            momentum: 0,
            x: '4%',
            y: '11%',
            rotation: 180
        },
        {
            key: 'right-hand',
            momentum: 0,
            x: '70%',
            y: '11%'
        },
        {
            key: 'bottom',
            momentum: 0,
            x: '35%',
            y: '58%'
        }
    ]
};
