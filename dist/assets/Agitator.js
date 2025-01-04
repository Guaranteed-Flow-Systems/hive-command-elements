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
exports.Agitator = void 0;
const React = __importStar(require("react"));
const Agitator = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 283.46 283.46", xmlSpace: "preserve" }, props),
    React.createElement("path", { d: "m278.03 228.78-26.55-22.31c-6.92-5.77-16.54-7.69-25.39-4.23l-55.78 21.16c-2.69-10.39-11.54-18.47-22.7-19.62V48.34h7.59c5.74 0 10.4-4.66 10.4-10.4v-5.46c0-5.74-4.66-10.4-10.4-10.4h-29.5c-5.74 0-10.4 4.66-10.4 10.4v5.46c0 5.74 4.66 10.4 10.4 10.4h7.68v155.81c-10 1.92-18.08 9.23-20.77 19.24l-55.4-21.16c-8.85-3.46-18.47-1.54-25.39 4.23L5.26 228.78c-4.62 3.85-3.46 10.77 1.92 13.08l36.16 15.39c13.85 6.16 30.01 5.39 43.09-1.92l27.7-15c4.23 9.23 13.08 15.77 23.85 15.77h6.92c10.77 0 20.01-6.54 23.85-15.77l28.08 15c13.08 7.31 29.24 8.08 43.09 1.92l36.16-15.39c5.41-2.31 6.57-9.24 1.95-13.08z", style: {
            fill: "#4d4d4e",
        } })));
exports.Agitator = Agitator;
exports.Agitator.metadata = {
    width: 50,
    height: 50,
    options: {
        on: 'Boolean',
        onClick: 'Boolean'
    }
};
