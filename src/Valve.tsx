import * as React from "react";
import { SVGProps } from "react";

export const ButterflyValve = (props: {options: any}) => (
  <svg
    onClick={props.options?.onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 283.46 283.46"
    xmlSpace="preserve"
  >
    <path
      d="M278.27 240.51V42.95c0-20.85-16.9-37.75-37.75-37.75H42.95C22.1 5.2 5.2 22.1 5.2 42.95v197.56c0 20.85 16.9 37.75 37.75 37.75h197.56c20.85.01 37.76-16.9 37.76-37.75zm-158.61 1.21V41.74c0-12.19 9.88-22.07 22.07-22.07s22.07 9.88 22.07 22.07v199.98c0 12.19-9.88 22.07-22.07 22.07s-22.07-9.88-22.07-22.07z"
      style={{
        fill: props.options?.fill || "#4d4d4e",
        transformOrigin: '50% 50%',
        transformBox: 'fill-box',
        transform: `rotate(${props.options?.open == true ? '90' : '0'}deg)`,
      }}
    />
  </svg>
);

ButterflyValve.metadata = {
  type: 'valve',
  width: 30,
  height: 30,
  options: {
    open: 'Boolean',
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

