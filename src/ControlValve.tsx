import * as React from "react";
import type { SVGProps } from "react";

export const ControlValve = (props: any) => (
  <svg 
    viewBox="0 0 20 20"
    onClick={props.options?.onClick} {...props}>
    <rect fill={props.options?.fill || '#4d4d4e'} width={20} height={20} rx={2.5} />
    <rect
      width={3}
      height={18}
      x={8.5}
      y={1}
      fill={"#fff"}
      rx={1.5}
      style={{
        transformOrigin: "50% 50%",
        transformBox: "content-box",
        transform: `rotate(${props.options?.angle}deg)`
      }}
    />
  </svg>
);




ControlValve.metadata = {
  type: 'valve',
  width: 30,
  height: 30,
  options: {
    angle: 'Number',
    onClick: 'Function',
    fill: 'String'
  },
  ports: [
    {
      key: 'outlet',
      type: 'source',
      momentum: 1,
      x: '80%',
      y: '30%',
      rotation: 180
    },
    {
      key: 'inlet',
      type: 'target',
      momentum: -1,
      x: '-10%',
      y: '30%'
    }
  ]
}

