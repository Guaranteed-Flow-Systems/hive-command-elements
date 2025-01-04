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
exports.InletFilter = void 0;
const React = __importStar(require("react"));
const InletFilter = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    console.log("Inlet filter opts", props, {
        fill: (_a = props.options) === null || _a === void 0 ? void 0 : _a.fill,
        fillEmpty: ((_b = props.options) === null || _b === void 0 ? void 0 : _b.fill) || 'abc',
        options: props.options,
        fillEq: (((_c = props.options) === null || _c === void 0 ? void 0 : _c.fill) || ((!((_d = props.options) === null || _d === void 0 ? void 0 : _d.stroke)) ? "#4d4d4e" : 'none'))
    });
    return React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 500 500", onClick: (_e = props.options) === null || _e === void 0 ? void 0 : _e.onClick }, props),
        React.createElement("style", null, `
            .inlet_filter_svg{
              fill:${((_f = props.options) === null || _f === void 0 ? void 0 : _f.fill) || ((!((_g = props.options) === null || _g === void 0 ? void 0 : _g.stroke)) ? "#4d4d4e" : 'none')}
            }
        `),
        React.createElement("path", { className: 'inlet_filter_svg', d: "M494.8 55.2h-86.5V33.7h-83v64.7H175.9V33.7h-83v21.5H.3v62.1h56.2V175h39v215.4c0 41.9 34.1 76 76 76h158.3c41.9 0 76-34.1 76-76V175h39v-57.7h50.1V55.2zm-147.5.5h36.6v39h-36.6v-39zm-232.4 0h39v39h-39v-39zM27.1 82h57.3v8.5H27.1V82zm148.8 96.1h7.1v207.8h-7.1V178.1zM296 385.9h-6.3V178.1h6.3v207.8zm-91-207.8h7.8v207.8H205V178.1zm29.8 0h5.5v207.8h-5.5V178.1zm27.5 0h5.5v207.8h-5.5V178.1zm-43.7 229.8h63.9v3h-63.9v-3zM318 178.1h7.3v207.8H318V178.1zm65.7 212.3c0 29.8-24.2 54-54 54H171.5c-29.8 0-54-24.2-54-54V178.1h36.4v229.8h42.8v25h107.9v-25h42.8V178.1h36.4v212.3zm39-237.4H78.5v-32.6h344.2V153zM468 90.5h-57.3V82H468v8.5z", style: {
                fill: ((_h = props.options) === null || _h === void 0 ? void 0 : _h.fill) || ((!((_j = props.options) === null || _j === void 0 ? void 0 : _j.stroke)) ? "#4d4d4e" : 'none'),
            } }));
};
exports.InletFilter = InletFilter;
exports.InletFilter.metadata = {
    width: 50,
    height: 50,
    type: 'inlet-filter',
    maintainAspect: true,
    options: {
        fill: 'String',
        stroke: 'String',
        onClick: 'Function'
    },
    ports: [
        {
            key: 'outlet',
            momentum: 1,
            x: '88%',
            y: '5%',
            rotation: 180
        },
        {
            key: 'inlet',
            momentum: -1,
            x: '-12%',
            y: '5%'
        }
    ]
};
