import * as React from "react";
import { SVGProps } from "react";

export const DosingPump = (props: {
  options: {
    fault: boolean,
    on: boolean,
    onClick?: () => void;
  }
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    onClick={props.options?.onClick}
    style={{
      filter: props.options?.fault ? 'url(#pump-fault)' : undefined,
    }}
    {...props}
  >
    <defs>
      <filter id="pump-fault" x="0" y="0">
        <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="red"  />
      </filter>
    </defs>
    <linearGradient
      id="dosing_pump_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={4.17}
      y1={-552.102}
      x2={79.692}
      y2={-627.624}
      gradientTransform="matrix(1 0 0 -1 0 -540)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#616365",
        }}
      />
      <stop
        offset={0.496}
        style={{
          stopColor: "#a0a0a0",
        }}
      />
      <stop
        offset={0.552}
        style={{
          stopColor: "#828284",
        }}
      />
      <stop
        offset={0.704}
        style={{
          stopColor: "#6f7072",
        }}
      />
      <stop
        offset={0.855}
        style={{
          stopColor: "#656668",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#616365",
        }}
      />
    </linearGradient>
    <path
      fill="url(#dosing_pump_svg__a)"
      d="M63.76 2.42H20.07C11.78 2.42 5 9.2 5 17.49v64.79c0 8.29 6.78 15.07 15.07 15.07h43.69c8.29 0 15.07-6.78 15.07-15.07V17.49c0-8.48-6.78-15.07-15.07-15.07z"
    />
    <linearGradient
      id="dosing_pump_svg__b"
      gradientUnits="userSpaceOnUse"
      x1={-865.216}
      y1={464.528}
      x2={-865.216}
      y2={498.051}
      gradientTransform="matrix(-1 0 0 1 -794.96 -400.757)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#616365",
        }}
      />
      <stop
        offset={0.532}
        style={{
          stopColor: "#a0a0a0",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#616365",
        }}
      />
    </linearGradient>
    <path
      fill="url(#dosing_pump_svg__b)"
      d="M45.11 97.34s.75-33.52 33.52-33.52H95.4v33.52H45.11z"
    />
    <path
      fill="none"
      stroke="#4C4C4D"
      strokeMiterlimit={10}
      d="M95.4 63.82H78.83V17.49c0-8.29-6.78-15.07-15.07-15.07H20.07C11.78 2.42 5 9.2 5 17.49v64.79c0 8.29 6.78 15.07 15.07 15.07H95.4V63.82z"
    />
    <linearGradient
      id="dosing_pump_svg__c"
      gradientUnits="userSpaceOnUse"
      x1={-40.816}
      y1={53.374}
      x2={130.605}
      y2={53.374}
      gradientTransform="matrix(1 0 0 -1 0 102)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#383638",
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
      fill={props.options?.on == true ? 'cyan': "url(#dosing_pump_svg__c)"}
      d="m59.9 58.58-1.69-6.59-14.13-37.85c-.56-1.69-2.64-1.69-3.01 0L26.94 51.99l-2.64 6.59C19.78 70.63 28.25 84 40.68 84.38h1.88c13-.94 20.91-14.12 17.34-25.8zM39.37 37.11c0-1.51 1.32-2.82 2.82-2.82s2.82 1.32 2.82 2.82V58.2c0 1.51-1.32 2.82-2.82 2.82s-2.82-1.32-2.82-2.82V37.11zm2.82 38.8c-2.64 0-4.71-2.07-4.71-4.71s2.07-4.71 4.71-4.71 4.71 2.07 4.71 4.71-2.07 4.71-4.71 4.71z"
    />
  </svg>
);

DosingPump.metadata = {
  width: 50,
  height: 50,
  type: 'dosing-pump',
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
      y: '70%',
      rotation: 180
    },
    {
      key: 'inlet',
      momentum: -1,
      x: '-10%',
      y: '70%'
    }
  ]
}

