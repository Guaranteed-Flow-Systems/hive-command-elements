import * as React from "react";
import type { SVGProps } from "react";

export const Earth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#fff"
    fillRule="evenodd"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    fontFamily="Roboto"
    fontSize={14}
    textAnchor="middle"
    viewBox="-4.5 -5 30 30"
    {...props}
  >
    <style>{".earth_svg__E{stroke-width:1}"}</style>
    <use xlinkHref="#earth_svg__A" x={0.5} y={0.5} />
    <symbol id="earth_svg__A" overflow="visible">
      <path
        fill="none"
        d="M10 0v15M5 15h10M7.5 17.5h5M8.75 20h2.5"
        className="earth_svg__E"
      />
    </symbol>
  </svg>
);

Earth.metadata = {
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
}