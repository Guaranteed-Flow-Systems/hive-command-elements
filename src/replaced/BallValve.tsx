import * as React from "react";
import { SVGProps } from "react";

export const BallValve = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    <radialGradient
      id="ball_valve_svg__a"
      cx={71.409}
      cy={67.223}
      r={20.795}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0.019}
        style={{
          stopColor: "#8d8c8e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#616264",
        }}
      />
    </radialGradient>
    <path
      fill="url(#ball_valve_svg__a)"
      d="m88.19 87.37-35.37-9.13a3.63 3.63 0 0 1-2.72-3.52V59.73c0-1.66 1.12-3.1 2.72-3.52l35.37-9.13c2.3-.59 4.54 1.14 4.54 3.52v33.25c-.01 2.37-2.25 4.11-4.54 3.52z"
    />
    <radialGradient
      id="ball_valve_svg__b"
      cx={65.438}
      cy={67.223}
      r={20.795}
      gradientTransform="matrix(-1 0 0 1 94.217 0)"
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0.019}
        style={{
          stopColor: "#8d8c8e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#616264",
        }}
      />
    </radialGradient>
    <path
      fill="url(#ball_valve_svg__b)"
      d="m12 87.37 35.37-9.13a3.63 3.63 0 0 0 2.72-3.52V59.73c0-1.66-1.12-3.1-2.72-3.52L12 47.08a3.633 3.633 0 0 0-4.54 3.52v33.25c0 2.37 2.24 4.11 4.54 3.52z"
    />
    <radialGradient
      id="ball_valve_svg__c"
      cx={50.094}
      cy={67.223}
      r={16.656}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0.019}
        style={{
          stopColor: "#8d8c8e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#616264",
        }}
      />
    </radialGradient>
    <circle fill="url(#ball_valve_svg__c)" cx={50.09} cy={67.22} r={16.66} />
    <path
      fill="#4C4C4D"
      d="M89.1 46.96c1.94 0 3.62 1.58 3.62 3.63v33.25c0 2.06-1.68 3.63-3.62 3.63-.3 0-.61-.04-.92-.12L60.5 80.22a16.562 16.562 0 0 1-10.41 3.66c-3.94 0-7.55-1.38-10.41-3.66L12 87.37c-.31.08-.61.12-.92.12-1.94 0-3.62-1.58-3.62-3.63V50.6c0-2.06 1.68-3.63 3.62-3.63.3 0 .61.04.92.12l27.68 7.15c2.85-2.29 6.47-3.66 10.41-3.66 3.94 0 7.55 1.38 10.41 3.66l27.68-7.15c.31-.09.62-.13.92-.13m0-3c-.56 0-1.12.07-1.67.21l-26.3 6.79c-3.24-2.2-7.11-3.4-11.04-3.4-3.93 0-7.79 1.2-11.04 3.4l-26.3-6.79c-.55-.14-1.11-.21-1.67-.21-1.74 0-3.39.68-4.64 1.91a6.552 6.552 0 0 0-1.98 4.73v33.25c0 3.66 2.97 6.63 6.62 6.63.56 0 1.12-.07 1.67-.21l26.3-6.79c3.24 2.2 7.11 3.4 11.04 3.4 3.93 0 7.79-1.2 11.04-3.4l26.3 6.79c.55.14 1.11.21 1.67.21 3.65 0 6.62-2.98 6.62-6.63V50.6c0-3.66-2.97-6.64-6.62-6.64z"
    />
  </svg>
);

BallValve.metadata = {
  type: 'valve'
}

