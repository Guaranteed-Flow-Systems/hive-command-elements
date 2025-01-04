import * as React from "react";
import { SVGProps } from "react";

export const Agitator = (props: {options?: { onClick: () => void, on: boolean }}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 89.9 90.1"
    xmlSpace="preserve"
    onClick={props.options?.onClick}
    {...props}
  >
    <linearGradient
      id="agitator_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={44.44}
      y1={23.806}
      x2={44.44}
      y2={10.236}
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
          stopColor: "#8d8c8e",
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
      fill="url(#agitator_svg__a)"
      stroke="#4C4C4D"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M30.9 10.2H58v13.6H30.9z"
    />
    <linearGradient
      id="agitator_svg__b"
      gradientUnits="userSpaceOnUse"
      x1={46.075}
      y1={44.326}
      x2={42.383}
      y2={44.326}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#3e3e3e",
        }}
      />
      <stop
        offset={0.112}
        style={{
          stopColor: "#434343",
        }}
      />
      <stop
        offset={0.299}
        style={{
          stopColor: "#505051",
        }}
      />
      <stop
        offset={0.5}
        style={{
          stopColor: "#616365",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3e3e3e",
        }}
      />
    </linearGradient>
    <path
      fill="url(#agitator_svg__b)"
      stroke="#4C4C4D"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M42.4 23.8h3.7v41h-3.7z"
    />
    <linearGradient
      id="agitator_svg__c"
      gradientUnits="userSpaceOnUse"
      x1={2386.666}
      y1={310.862}
      x2={2402.69}
      y2={294.839}
      gradientTransform="matrix(.0472 .9989 .9989 -.0472 -391.812 -2305.785)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#3e3e3e",
        }}
      />
      <stop
        offset={0.373}
        style={{
          stopColor: "#3f3f3f",
        }}
      />
      <stop
        offset={0.573}
        style={{
          stopColor: "#434343",
        }}
      />
      <stop
        offset={0.732}
        style={{
          stopColor: "#4a4a4a",
        }}
      />
      <stop
        offset={0.869}
        style={{
          stopColor: "#535455",
        }}
      />
      <stop
        offset={0.991}
        style={{
          stopColor: "#606263",
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
      fill="url(#agitator_svg__c)"
      stroke="#4C4C4D"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m37.9 69.6-15.3-5.8c-2.3-.8-4.8-.4-6.6 1.2l-6.9 5.8c-1.2 1-.9 2.8.5 3.4l9.4 4c3.6 1.6 7.8 1.4 11.2-.5l8-4.3c1.4-.9 1.3-3.1-.3-3.8z"
    />
    <linearGradient
      id="agitator_svg__d"
      gradientUnits="userSpaceOnUse"
      x1={2394.455}
      y1={475.649}
      x2={2410.478}
      y2={459.625}
      gradientTransform="matrix(-.0472 .9989 -.9989 -.0472 645.792 -2305.785)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#3e3e3e",
        }}
      />
      <stop
        offset={0.373}
        style={{
          stopColor: "#3f3f3f",
        }}
      />
      <stop
        offset={0.573}
        style={{
          stopColor: "#434343",
        }}
      />
      <stop
        offset={0.732}
        style={{
          stopColor: "#4a4a4a",
        }}
      />
      <stop
        offset={0.869}
        style={{
          stopColor: "#535455",
        }}
      />
      <stop
        offset={0.991}
        style={{
          stopColor: "#606263",
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
      fill="url(#agitator_svg__d)"
      stroke="#4C4C4D"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m51.1 69.6 15.3-5.8c2.3-.9 4.8-.4 6.6 1.1l6.9 5.8c1.2 1 .9 2.8-.5 3.4l-9.4 4c-3.6 1.6-7.8 1.4-11.2-.5l-8-4.3c-1.4-.8-1.3-3 .3-3.7z"
    />
    <linearGradient
      id="agitator_svg__e"
      gradientUnits="userSpaceOnUse"
      x1={52.194}
      y1={71.11}
      x2={36.791}
      y2={71.11}
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
          stopColor: "#8d8c8e",
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
      fill="url(#agitator_svg__e)"
      stroke="#4C4C4D"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M36.8 64.3h15.4v13.6H36.8z"
    />
  </svg>
);

Agitator.metadata = {
  width: 50,
  height: 50,
  options: {
    on: 'Boolean',
    onClick: 'Boolean'
  }
}