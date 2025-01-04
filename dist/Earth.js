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
exports.Earth = void 0;
const React = __importStar(require("react"));
const Earth = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#fff", fillRule: "evenodd", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", fontFamily: "Roboto", fontSize: 14, textAnchor: "middle", viewBox: "-4.5 -5 30 30" }, props),
    React.createElement("style", null, ".earth_svg__E{stroke-width:1}"),
    React.createElement("use", { xlinkHref: "#earth_svg__A", x: 0.5, y: 0.5 }),
    React.createElement("symbol", { id: "earth_svg__A", overflow: "visible" },
        React.createElement("path", { fill: "none", d: "M10 0v15M5 15h10M7.5 17.5h5M8.75 20h2.5", className: "earth_svg__E" }))));
exports.Earth = Earth;
exports.Earth.metadata = {
    width: 40,
    height: 40,
    ports: [
        {
            key: 'outlet',
            momentum: 1,
            x: '35%',
            y: '0%'
        },
    ]
};
