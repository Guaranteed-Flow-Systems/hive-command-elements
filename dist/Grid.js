"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
/*
    props
    - editing : bool
*/
const Grid = (props) => {
    const renderItem = (row, col) => {
        var _a, _b;
        if (props.editing) {
            return (react_1.default.createElement("div", { onDrop: (evt) => {
                    let data = JSON.parse(evt.dataTransfer.getData('infinite-canvas'));
                    console.log("Data from grid cell", { row, col });
                    // let pos = getRelativeCanvasPos(canvasRef, {offset: _offset, zoom: _zoom}, {x: e.clientX, y: e.clientY})
                    // onNodeCreate(pos, data)
                    // isDragging.current.dragging = false
                }, style: { border: '1px solid black', flex: 1 } }, (_a = props.items) === null || _a === void 0 ? void 0 : _a.find((a) => a.row == row && a.col == col)));
        }
        else {
            return (_b = props.items) === null || _b === void 0 ? void 0 : _b.find((a) => a.row == row && a.col == col);
        }
    };
    return (react_1.default.createElement(material_1.Grid, { sx: {
            display: 'flex',
            flex: 1
        }, container: true, spacing: 2 }, Array.from(new Array((props.rows || 1) * (props.cols || 1))).map((x, ix) => {
        let row = Math.floor(ix / props.cols);
        let col = ix % props.cols;
        return (react_1.default.createElement(material_1.Grid, { sx: {
                display: 'flex',
                flex: 1,
                padding: '0 !important'
            }, item: true, xs: props.cellSize }, renderItem(row, col)));
    })));
};
exports.Grid = Grid;
exports.Grid.metadata = {
    options: {
        cellSize: 'Number',
        rows: 'Number',
        cols: 'Number',
        items: 'Array'
    }
};
