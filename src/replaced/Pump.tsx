import * as React from "react";
import { SVGProps } from "react";

export const Pump = (props: any) => {

  const pumpOn = `${props.options?.on}`;

  return (
    <svg
      onClick={props.options?.onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      style={{
        filter: props.options?.fault == true ? 'url(#pump-fault)' : undefined
      }}
      {...props}
    >
      <defs>
        <filter id="pump-fault" x="0" y="0">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="red"  />
        </filter>
      </defs>
      <linearGradient
        id="pump_svg__a"
        gradientUnits="userSpaceOnUse"
        x1={1680.754}
        y1={-633.181}
        x2={1680.754}
        y2={-591.601}
        gradientTransform="rotate(180 860.603 -270)"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#616264",
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
            stopColor: "#616264",
          }}
        />
      </linearGradient>
      <path
        fill="url(#pump_svg__a)"
        d="m71.54 85.47-27.6-32.2c-1.87-2.16-5.32-2.16-7.19 0L9.3 85.47c-2.59 3.02-.43 7.76 3.59 7.76h55.2c3.88 0 6.18-4.74 3.45-7.76z"
      />
      <radialGradient
        id="pump_svg__b"
        cx={1680.715}
        cy={-589.102}
        r={37.806}
        gradientTransform="rotate(180 860.603 -270)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#616264",
          }}
        />
        <stop
          offset={0.541}
          style={{
            stopColor: "#a0a0a0",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#616264",
          }}
        />
      </radialGradient>
      <circle fill="url(#pump_svg__b)" cx={40.49} cy={49.1} r={37.81} />
      <linearGradient
        id="pump_svg__c"
        gradientUnits="userSpaceOnUse"
        x1={1652.468}
        y1={-589.102}
        x2={1652.468}
        y2={-551.296}
        gradientTransform="rotate(180 860.603 -270)"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#616264",
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
            stopColor: "#616264",
          }}
        />
      </linearGradient>
      <path
        fill="url(#pump_svg__c)"
        d="M40.49 11.3s.72 37.81 37.81 37.81h18.69V11.3h-56.5z"
      />
      <path
        fill="none"
        stroke="#4C4C4D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M40.49 11.3c-20.84 0-37.81 16.96-37.81 37.8 0 11.5 5.17 21.71 13.22 28.75l-6.6 7.62c-2.59 3.02-.43 7.76 3.59 7.76h55.2c4.03 0 6.18-4.74 3.59-7.76l-6.61-7.62C73.12 70.95 78.3 60.6 78.3 49.1h18.69V11.3h-56.5z"
      />
      <path
        fill={props.options?.fault == true ? 'red' : pumpOn == "true" || props.options?.speed > 0 ? 'cyan' : "#333"}
        d="M48.18 24.81c-19.55-5.46-37.09 11.93-31.62 31.62 2.3 8.19 8.77 14.66 16.96 16.96 19.55 5.46 37.09-11.93 31.62-31.62-2.3-8.19-8.77-14.66-16.96-16.96zM41.42 66.5h-1.14c-6.32-.43-10.49-7.04-8.34-12.94l1.15-3.31 6.9-19.12c.29-.72 1.15-.72 1.44 0l6.9 19.12 1.15 3.31c2.44 5.89-1.59 12.5-8.06 12.94z"
      />
    </svg>
  );

}
Pump.metadata = {
  width: 50,
  height: 50,
  type: 'pump',
  options: {
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
