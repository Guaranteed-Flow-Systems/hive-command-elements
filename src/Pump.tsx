import * as React from "react";
import { SVGProps } from "react";

export const Pump = (props: any) => {

  return <svg
    onClick={props.options?.onClick}
    id="pump_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 283.46 283.46"
    xmlSpace="preserve"
  >
    <style>{`
      .pump_svg__st0 {
        fill: #4d4d4e;
      }
      .pump_svg{
        fill:${props.options?.fill || (!props.options?.stroke) ? "#4d4d4e" : 'none'}
      }
    `}</style>
    <path
      style={{
        fill: props.options?.color || '#4d4d4e'
      }}
      className="pump_svg__st0"
      d="m135.74 153.84-20.02-55.46c-.84-2.09-3.34-2.09-4.18 0l-20.02 55.46-3.34 9.6c-6.24 17.12 5.86 36.29 24.19 37.54h3.3c18.77-1.28 30.46-20.45 23.38-37.54l-3.31-9.6z"
    />
    <path
      style={{
        fill: props.options?.fill, // || (!props.options?.stroke) ? "#4d4d4e" : 'none',
        stroke: props.options?.stroke,
        strokeWidth: props.options?.stroke ? '5px' : undefined
      }}
      className="pump_svg"
      d="M113 40.85C52.55 40.85 3.32 90.05 3.32 150.5c0 33.36 15 62.98 38.35 83.4L22.52 256c-7.51 8.76-1.25 22.51 10.41 22.51h160.13c11.69 0 17.93-13.75 10.41-22.51l-19.17-22.1c23.35-20.02 38.38-50.04 38.38-83.4h54.22V40.85H113zM92.78 220.96c-23.76-6.67-42.53-25.44-49.2-49.2C27.71 114.65 78.6 64.2 135.31 80.04c23.76 6.67 42.53 25.44 49.2 49.2 15.87 57.12-35.02 107.56-91.73 91.72z"
    />
  </svg>
}

Pump.metadata = {
  width: 50,
  height: 50,
  type: 'pump',
  options: {
    'color': 'String',
    'fill': 'String',
    'stroke': 'String',
    'on': 'Boolean',
    'onClick': 'Function'
  },
  ports: [
    {
      key: 'outlet',
      momentum: 1,
      x: '85%',
      y: '20%',
      rotation: 180
    },
    {
      key: 'inlet',
      momentum: -1,
      x: '-5%',
      y: '55%'
    }
  ]
}
