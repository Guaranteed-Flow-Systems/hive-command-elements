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
    var _a, _b, _c;
    const [rotation, setRotation] = React.useState(0);
    const blowerOn = `${(_a = props.options) === null || _a === void 0 ? void 0 : _a.on}`;
    React.useEffect(() => {
        let timer;
        if (blowerOn == "true") {
            timer = setInterval(() => {
                setRotation((rotation) => (rotation + 5) % 360);
            }, 300);
        }
        else {
            setRotation(0);
            clearInterval(timer);
        }
        return () => {
            if (timer)
                clearInterval(timer);
        };
    }, [(_b = props.options) === null || _b === void 0 ? void 0 : _b.on]);
    // console.log("Blower options", props.options);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", xmlSpace: "preserve", style: {
            filter: ((_c = props.options) === null || _c === void 0 ? void 0 : _c.fault) ? `url(#blower-fault)` : undefined,
            // filter: props.options?.fault == true ? 'drop-shadow(0px 0px 5px red)' : undefined // props.options?.on == true ? 'drop-shadow(0px 0px 5px green)' : undefined
        }, onClick: () => {
            var _a, _b, _c;
            console.log("CLICK", { onClick: (_a = props.options) === null || _a === void 0 ? void 0 : _a.onClick });
            try {
                (_c = (_b = props.options) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.call(_b);
            }
            catch (e) {
                console.error(e);
            }
        } }, props),
        React.createElement("defs", null,
            React.createElement("filter", { id: "blower-fault", x: "0", y: "0" },
                React.createElement("feDropShadow", { dx: "0", dy: "0", stdDeviation: "5", floodColor: "red" }))),
        React.createElement("linearGradient", { id: "blower_svg__a", gradientUnits: "userSpaceOnUse", x1: 1679.894, y1: -630.862, x2: 1679.894, y2: -590.504, gradientTransform: "rotate(180 860.603 -270)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#616264",
                } }),
            React.createElement("stop", { offset: 0.532, style: {
                    stopColor: "#a0a0a0",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616264",
                } })),
        React.createElement("path", { fill: "url(#blower_svg__a)", d: "M71.52 83.38 44.73 52.12c-1.81-2.09-5.16-2.09-6.98 0L11.1 83.38c-2.51 2.93-.42 7.53 3.49 7.53h53.44c3.91 0 6-4.6 3.49-7.53z" }),
        React.createElement("radialGradient", { id: "blower_svg__b", cx: 1679.964, cy: -588.079, r: 36.635, gradientTransform: "rotate(180 860.603 -270)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#616264",
                } }),
            React.createElement("stop", { offset: 0.541, style: {
                    stopColor: "#a0a0a0",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616264",
                } })),
        React.createElement("circle", { fill: "url(#blower_svg__b)", cx: 41.24, cy: 48.08, r: 36.7 }),
        React.createElement("linearGradient", { id: "blower_svg__c", gradientUnits: "userSpaceOnUse", x1: 1652.477, y1: -588.079, x2: 1652.477, y2: -551.384, gradientTransform: "rotate(180 860.603 -270)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#616264",
                } }),
            React.createElement("stop", { offset: 0.532, style: {
                    stopColor: "#a0a0a0",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616264",
                } })),
        React.createElement("path", { fill: "url(#blower_svg__c)", d: "M41.24 11.38s.7 36.7 36.7 36.7h18.28v-36.7H41.24z" }),
        React.createElement("radialGradient", { id: "blower_svg__d", cx: 1651.878, cy: -588.436, r: 5.326, gradientTransform: "rotate(180 846.593 -270)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#616264",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#3d3d3d",
                } })),
        React.createElement("circle", { fill: "url(#blower_svg__d)", cx: 41.24, cy: 48.5, r: 5.3 }),
        React.createElement("linearGradient", { id: "blower_svg__e", gradientUnits: "userSpaceOnUse", x1: 1651.878, y1: -572.801, x2: 1667.165, y2: -572.801, gradientTransform: "rotate(180 846.593 -270)" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#3d3d3d",
                } }),
            React.createElement("stop", { offset: 0.374, style: {
                    stopColor: "#3f3e3f",
                } }),
            React.createElement("stop", { offset: 0.575, style: {
                    stopColor: "#424343",
                } }),
            React.createElement("stop", { offset: 0.734, style: {
                    stopColor: "#494a4a",
                } }),
            React.createElement("stop", { offset: 0.871, style: {
                    stopColor: "#535455",
                } }),
            React.createElement("stop", { offset: 0.993, style: {
                    stopColor: "#606163",
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#616264",
                } })),
        React.createElement("g", { style: {
                transformBox: 'fill-box',
                transformOrigin: '50% 50%',
                transform: blowerOn == "true" ? `rotate(${rotation}deg)` : undefined,
            } },
            React.createElement("path", { fill: "url(#blower_svg__e)", d: "M41.24 22.96c-9.35 9.35 0 17.3 0 17.3s-3.21-.14-5.72 2.37C21.29 33.14 27.15 27 27.15 27s3.91-4.04 14.09-4.04z" }),
            React.createElement("linearGradient", { id: "blower_svg__f", gradientUnits: "userSpaceOnUse", x1: 1102.993, y1: -1654.695, x2: 1118.28, y2: -1654.695, gradientTransform: "rotate(-120 1068.364 -504.451)" },
                React.createElement("stop", { offset: 0, style: {
                        stopColor: "#3d3d3d",
                    } }),
                React.createElement("stop", { offset: 0.374, style: {
                        stopColor: "#3f3e3f",
                    } }),
                React.createElement("stop", { offset: 0.575, style: {
                        stopColor: "#424343",
                    } }),
                React.createElement("stop", { offset: 0.734, style: {
                        stopColor: "#494a4a",
                    } }),
                React.createElement("stop", { offset: 0.871, style: {
                        stopColor: "#535455",
                    } }),
                React.createElement("stop", { offset: 0.993, style: {
                        stopColor: "#606163",
                    } }),
                React.createElement("stop", { offset: 1, style: {
                        stopColor: "#616264",
                    } })),
            React.createElement("path", { fill: "url(#blower_svg__f)", d: "M63.43 35.66c-12.84-3.49-14.93 8.65-14.93 8.65s-1.4-2.79-5.02-3.77c1.12-17.02 9.35-15.07 9.35-15.07s5.43 1.4 10.6 10.19z" }),
            React.createElement("linearGradient", { id: "blower_svg__g", gradientUnits: "userSpaceOnUse", x1: -108.344, y1: -1720.316, x2: -93.057, y2: -1720.316, gradientTransform: "rotate(-60 1511.905 -973.396)" },
                React.createElement("stop", { offset: 0, style: {
                        stopColor: "#3d3d3d",
                    } }),
                React.createElement("stop", { offset: 0.374, style: {
                        stopColor: "#3f3e3f",
                    } }),
                React.createElement("stop", { offset: 0.575, style: {
                        stopColor: "#424343",
                    } }),
                React.createElement("stop", { offset: 0.734, style: {
                        stopColor: "#494a4a",
                    } }),
                React.createElement("stop", { offset: 0.871, style: {
                        stopColor: "#535455",
                    } }),
                React.createElement("stop", { offset: 0.993, style: {
                        stopColor: "#606163",
                    } }),
                React.createElement("stop", { offset: 1, style: {
                        stopColor: "#616264",
                    } })),
            React.createElement("path", { fill: "url(#blower_svg__g)", d: "M63.43 61.19c-3.35-12.84-14.93-8.65-14.93-8.65s1.67-2.65.84-6.14c15.35-7.53 17.72.56 17.72.56s1.39 5.44-3.63 14.23z" }),
            React.createElement("linearGradient", { id: "blower_svg__h", gradientUnits: "userSpaceOnUse", x1: -770.904, y1: -704.117, x2: -755.617, y2: -704.117, gradientTransform: "translate(812.213 768.171)" },
                React.createElement("stop", { offset: 0, style: {
                        stopColor: "#3d3d3d",
                    } }),
                React.createElement("stop", { offset: 0.374, style: {
                        stopColor: "#3f3e3f",
                    } }),
                React.createElement("stop", { offset: 0.575, style: {
                        stopColor: "#424343",
                    } }),
                React.createElement("stop", { offset: 0.734, style: {
                        stopColor: "#494a4a",
                    } }),
                React.createElement("stop", { offset: 0.871, style: {
                        stopColor: "#535455",
                    } }),
                React.createElement("stop", { offset: 0.993, style: {
                        stopColor: "#606163",
                    } }),
                React.createElement("stop", { offset: 1, style: {
                        stopColor: "#616264",
                    } })),
            React.createElement("path", { fill: "url(#blower_svg__h)", d: "M41.24 73.89c9.35-9.35 0-17.3 0-17.3s3.21.14 5.72-2.37c14.23 9.49 8.37 15.63 8.37 15.63s-3.76 4.04-14.09 4.04z" }),
            React.createElement("linearGradient", { id: "blower_svg__i", gradientUnits: "userSpaceOnUse", x1: -222.041, y1: 377.862, x2: -206.754, y2: 377.862, gradientTransform: "rotate(60 181.354 433.397)" },
                React.createElement("stop", { offset: 0, style: {
                        stopColor: "#3d3d3d",
                    } }),
                React.createElement("stop", { offset: 0.374, style: {
                        stopColor: "#3f3e3f",
                    } }),
                React.createElement("stop", { offset: 0.575, style: {
                        stopColor: "#424343",
                    } }),
                React.createElement("stop", { offset: 0.734, style: {
                        stopColor: "#494a4a",
                    } }),
                React.createElement("stop", { offset: 0.871, style: {
                        stopColor: "#535455",
                    } }),
                React.createElement("stop", { offset: 0.993, style: {
                        stopColor: "#606163",
                    } }),
                React.createElement("stop", { offset: 1, style: {
                        stopColor: "#616264",
                    } })),
            React.createElement("path", { fill: "url(#blower_svg__i)", d: "M19.2 61.19c12.84 3.49 14.93-8.65 14.93-8.65s1.4 2.79 5.02 3.77c-1.12 17.02-9.35 15.07-9.35 15.07s-5.44-1.4-10.6-10.19z" }),
            React.createElement("linearGradient", { id: "blower_svg__j", gradientUnits: "userSpaceOnUse", x1: 989.311, y1: 443.563, x2: 1004.598, y2: 443.563, gradientTransform: "rotate(120 624.847 -35.548)" },
                React.createElement("stop", { offset: 0, style: {
                        stopColor: "#3d3d3d",
                    } }),
                React.createElement("stop", { offset: 0.374, style: {
                        stopColor: "#3f3e3f",
                    } }),
                React.createElement("stop", { offset: 0.575, style: {
                        stopColor: "#424343",
                    } }),
                React.createElement("stop", { offset: 0.734, style: {
                        stopColor: "#494a4a",
                    } }),
                React.createElement("stop", { offset: 0.871, style: {
                        stopColor: "#535455",
                    } }),
                React.createElement("stop", { offset: 0.993, style: {
                        stopColor: "#606163",
                    } }),
                React.createElement("stop", { offset: 1, style: {
                        stopColor: "#616264",
                    } })),
            React.createElement("path", { fill: "url(#blower_svg__j)", d: "M19.2 35.66c3.35 12.84 14.93 8.65 14.93 8.65s-1.67 2.65-.84 6.14c-15.35 7.53-17.72-.56-17.72-.56s-1.4-5.3 3.63-14.23z" })),
        React.createElement("path", { fill: "none", stroke: "#4C4C4D", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M41.24 11.38c-20.23 0-36.7 16.46-36.7 36.7 0 11.16 5.02 21.07 12.84 27.91l-6.42 7.39c-2.51 2.93-.42 7.53 3.49 7.53h53.58c3.91 0 6-4.6 3.49-7.53l-6.42-7.39c7.81-6.7 12.84-16.74 12.84-27.91h18.28v-36.7H41.24z" })));
};
exports.Blower = Blower;
exports.Blower.metadata = {
    width: 50,
    height: 50,
    type: 'blower',
    maintainAspect: true,
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
