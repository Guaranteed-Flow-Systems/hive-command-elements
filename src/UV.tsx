import * as React from "react";
import type { SVGProps } from "react";

export const UV = (props: any) => {

  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="uv_svg__Layer_1"
    data-name="Layer 1"
    viewBox="0 0 165.4 45.3"
    onClick={props.options?.onClick}
    {...props}
  >
    <defs>
      <linearGradient
        id="uv_svg__linear-gradient"
        x1={75.4}
        x2={75.4}
        y1={33.1}
        y2={3.1}
        gradientTransform="matrix(1 0 0 -1 0 48)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#393839" />
        <stop offset={0.5} stopColor="#7e7f81" />
        <stop offset={1} stopColor="#393839" />
      </linearGradient>
      <linearGradient
        xlinkHref="#uv_svg__linear-gradient"
        id="uv_svg__linear-gradient-2"
        x1={0.4}
        x2={30.4}
        y1={45.4}
        y2={45.4}
      />
      <linearGradient
        xlinkHref="#uv_svg__linear-gradient"
        id="uv_svg__linear-gradient-3"
        x1={162.7}
        x2={162.7}
        y1={33.1}
        y2={3.1}
      />
      <linearGradient
        id="uv_svg__no-flow"
        x1={75.4}
        x2={75.4}
        y1={38.3}
        y2={21.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#7e7f81" />
        <stop offset={0.5} stopColor="#717173" />
        <stop offset={1} stopColor="#7e7f81" />
      </linearGradient>
      <linearGradient
        id="uv_svg__uv-off"
        x1={74}
        x2={74}
        y1={32.14}
        y2={27.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#7c7c7c" />
        <stop offset={0.5} stopColor="#c9c9c9" />
        <stop offset={1} stopColor="#7c7c7c" />
      </linearGradient>
      <linearGradient
        id="uv_svg__uv-on"
        x1={74}
        x2={74}
        y1={32.14}
        y2={27.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4c48ff" />
        <stop offset={0.02} stopColor="#5653ff" />
        <stop offset={0.11} stopColor="#7371ff" />
        <stop offset={0.19} stopColor="#8989ff" />
        <stop offset={0.28} stopColor="#999aff" />
        <stop offset={0.38} stopColor="#a2a4ff" />
        <stop offset={0.5} stopColor="#a5a7ff" />
        <stop offset={0.62} stopColor="#a2a4ff" />
        <stop offset={0.72} stopColor="#999aff" />
        <stop offset={0.81} stopColor="#8989ff" />
        <stop offset={0.9} stopColor="#7371ff" />
        <stop offset={0.98} stopColor="#5653ff" />
        <stop offset={1} stopColor="#4c48ff" />
      </linearGradient>
      <linearGradient
        id="uv_svg__flow-with-uv"
        x1={75.45}
        x2={75.45}
        y1={38.3}
        y2={21.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6aa8e5" />
        <stop offset={0.5} stopColor="#fff" />
        <stop offset={1} stopColor="#6aa8e5" />
      </linearGradient>
      <linearGradient id="uv_svg__flow-with-no-uv">
        <stop offset={0} stopColor="#6aa8e5" />
      </linearGradient>
      <linearGradient id="uv_svg__bulb-error">
        <stop offset={0} stopColor="red" />
      </linearGradient>
      <style>{".uv_svg__cls-2{fill:#4d4d4e}"}</style>
    </defs>
    <path
      d="M146.9 44.9H3.9a3.54 3.54 0 0 1-3.5-3.5v-23a3.54 3.54 0 0 1 3.5-3.5h143a3.54 3.54 0 0 1 3.5 3.5v23a3.54 3.54 0 0 1-3.5 3.5"
      style={{
        fill: "url(#uv_svg__linear-gradient)",
      }}
    />
    <path d="M6.27 4.9h17.6v10H6.27z" className="uv_svg__cls-2" />
    <path
      d="M30.4 2.6A2.22 2.22 0 0 0 28.2.4H2.6A2.22 2.22 0 0 0 .4 2.6a2.22 2.22 0 0 0 2.2 2.2h25.5a2.13 2.13 0 0 0 2.3-2.2"
      style={{
        fill: "url(#uv_svg__linear-gradient-2)",
      }}
    />
    <path d="M150.4 20.7h10v17.6h-10z" className="uv_svg__cls-2" />
    <path
      d="M162.7 44.9a2.22 2.22 0 0 0 2.2-2.2V17.1a2.22 2.22 0 0 0-2.2-2.2 2.22 2.22 0 0 0-2.2 2.2v25.5a2.13 2.13 0 0 0 2.2 2.3"
      style={{
        fill: "url(#uv_svg__linear-gradient-3)",
      }}
    />
    <rect
      width={54.04}
      height={16.8}
      x={48.38}
      y={21.5}
      rx={3.25}
      style={{
        fill: `url(#${props.options?.flowFill})`,
      }}
    />
    <path
      d="M56 27.66h38.28v4.49H56a2.24 2.24 0 0 1-2.24-2.24A2.24 2.24 0 0 1 56 27.66"
      style={{
        fill: `url(#${props.options?.uvFill})`,
      }}
    />
    <path
      d="M102.52 28.85H100A2.31 2.31 0 0 0 97.54 27h-3.26v5.9h3.26A2.31 2.31 0 0 0 100 31h2.49Z"
      style={{
        fill: "#393839",
      }}
    />
  </svg>)
}

UV.metadata = {
  type: 'uv',
  width: 150,
  height: 50,
  options: {
    uvFill: 'String',
    flowFill: 'String',
    onClick: 'Function'
  },
  ports: [
    {
      key: 'inlet',
      momentum: 1,
      x: '5%',
      y: '5%',
    },
    {
      key: 'outlet',
      momentum: -1,
      x: '95%',
      y: '55%'
    }
  ]
}
