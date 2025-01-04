import * as React from "react";
import { SVGProps } from "react";

export const TJoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="TJoin_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 283.5 283.5"
    xmlSpace="preserve"
  >
    <style>
      {
        ".TJoin_svg__st0{opacity:.8;fill:none;stroke:#626363;stroke-width:13;stroke-miterlimit:10}"
      }
    </style>
    <path
      className="TJoin_svg__st0"
      d="M277.5 56.9H5.7M170 221.2V113.5h107.5M5.7 113.5h107.8v107.7"
    />
    <path
      style={{
        fill: "#939393",
      }}
      d="M6 58v54.3h108.6v108.6h54.3V112.3h108.6V58z"
    />
  </svg>
);

TJoin.metadata = {
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
}