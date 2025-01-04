import * as React from "react";
import { SVGProps } from "react";

export const Valve = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 59.4"
    xmlSpace="preserve"
    role="img"
    style={{
      filter: props.options?.fault ? 'url(#valve-fault)' : undefined, 
      transform: props.options?.open != 'true' ? 'rotate(90deg)' : undefined
    }}
    {...props}
  >
    <defs>
      <filter id="valve-fault" x="0" y="0">
        <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="red"  />
      </filter>
    </defs>
    <linearGradient
      id="Valve_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={23.143}
      y1={46.326}
      x2={57.775}
      y2={11.694}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#707174",
        }}
      />
      <stop
        offset={0.501}
        style={{
          stopColor: "#d4d4d6",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#707174",
        }}
      />
    </linearGradient>
    <path
      fill="url(#Valve_svg__a)"
      d="M28.9 48.7H52c4.5 0 8.1-3.6 8.1-8.1V17.4c0-4.5-3.6-8.1-8.1-8.1H28.9c-4.5 0-8.1 3.6-8.1 8.1v23.1c0 4.6 3.6 8.2 8.1 8.2z"
    />
    <linearGradient
      id="Valve_svg__b"
      gradientUnits="userSpaceOnUse"
      x1={20.264}
      y1={29.01}
      x2={60.653}
      y2={29.01}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#383739",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#383838",
        }}
      />
    </linearGradient>
    <path
      fill="none"
      stroke="url(#Valve_svg__b)"
      strokeMiterlimit={10}
      d="M28.9 48.7H52c4.5 0 8.1-3.6 8.1-8.1V17.4c0-4.5-3.6-8.1-8.1-8.1H28.9c-4.5 0-8.1 3.6-8.1 8.1v23.1c0 4.6 3.6 8.2 8.1 8.2z"
    />
    <linearGradient
      id="Valve_svg__c"
      gradientUnits="userSpaceOnUse"
      x1={-235.002}
      y1={1699.012}
      x2={-223.144}
      y2={1699.012}
      gradientTransform="rotate(90 740.62 998.702)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#554b62",
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: "#ada9b8",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#554b62",
        }}
      />
    </linearGradient>
    <path
      fill="none"
      stroke="url(#Valve_svg__c)"
      strokeWidth={11.858}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M70.3 29H10.4"
    />
  </svg>
);

Valve.metadata = {
  type: 'valve',
  width: 50,
  height: 50,
  ports: [
    {
      key: 'outlet',
      momentum: 1,
      x: '70%',
      y: '37%',
      rotation: 180
    },
    {
      key: 'inlet',
      momentum: -1,
      x: '0%',
      y: '37%'
    }
  ] 
}

