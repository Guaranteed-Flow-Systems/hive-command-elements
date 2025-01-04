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
exports.Blower = void 0;
const React = __importStar(require("react"));
const Blower = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    };
    const id = makeid(5);
    return React.createElement("svg", { onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 283.46 283.46", xmlSpace: "preserve" },
        React.createElement("style", null, `

      .blower__svg_${id}{
        fill:${((_b = props.options) === null || _b === void 0 ? void 0 : _b.fill) || (!((_c = props.options) === null || _c === void 0 ? void 0 : _c.stroke)) ? "#4d4d4e" : 'none'}
      }
    `),
        React.createElement("path", { className: `blower__svg_${id}`, d: "M113.76 31.94C51.84 31.94 1.43 82.32 1.43 144.27c0 34.16 15.37 64.49 39.3 85.43l-19.65 22.62c-7.68 8.97-1.29 23.05 10.68 23.05h164c11.97 0 18.36-14.08 10.68-23.05l-19.65-22.62c23.9-20.51 39.3-51.24 39.3-85.43h55.95V31.94H113.76zm35.47 43.13s16.62 4.29 32.44 31.19c-39.3-10.68-45.7 26.48-45.7 26.48s-4.29-8.54-15.37-11.54c3.44-52.1 28.63-46.13 28.63-46.13zm-19.25 70.49c0 8.96-7.26 16.22-16.22 16.22s-16.22-7.26-16.22-16.22 7.26-16.22 16.22-16.22 16.22 7.26 16.22 16.22zM70.63 79.75s11.97-12.37 43.13-12.37c-28.62 28.62 0 52.95 0 52.95s-9.83-.43-17.51 7.25C52.69 98.55 70.63 79.75 70.63 79.75zm-35.44 70.06s-4.29-16.22 11.11-43.56c10.25 39.3 45.7 26.48 45.7 26.48s-5.11 8.11-2.57 18.79c-46.99 23.06-54.24-1.71-54.24-1.71zm43.55 65.78S62.09 211.3 46.3 184.4C85.6 195.08 92 157.92 92 157.92s4.29 8.54 15.37 11.54c-3.44 52.1-28.63 46.13-28.63 46.13zm78.14-4.68s-11.51 12.37-43.13 12.37c28.62-28.62 0-52.95 0-52.95s9.83.43 17.51-7.25c43.56 29.04 25.62 47.83 25.62 47.83zm24.8-26.51c-10.25-39.3-45.7-26.48-45.7-26.48s5.11-8.11 2.57-18.79c46.98-23.05 54.24 1.71 54.24 1.71s4.25 16.66-11.11 43.56z", style: {
                fill: (_d = props.options) === null || _d === void 0 ? void 0 : _d.fill,
                stroke: (_e = props.options) === null || _e === void 0 ? void 0 : _e.stroke,
                strokeWidth: ((_f = props.options) === null || _f === void 0 ? void 0 : _f.stroke) ? '5px' : undefined
            } }));
};
exports.Blower = Blower;
exports.Blower.metadata = {
    width: 50,
    height: 50,
    type: 'blower',
    maintainAspect: true,
    options: {
        fill: 'String',
        stroke: 'String',
        on: 'Boolean',
        fault: 'Boolean',
        onClick: 'Function'
    },
    ports: [
        {
            key: 'outlet',
            type: 'source',
            momentum: 1,
            x: '80%',
            y: '18%',
            rotation: 180
        },
        // {
        //   key: 'inlet',
        //   momentum: -1,
        //   x: '-14%',
        //   y: '55%'
        // }
    ]
};
