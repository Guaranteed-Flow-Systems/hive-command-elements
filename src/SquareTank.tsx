import * as React from "react";
import { SVGProps } from "react";

export const SquareTank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="54.726 24.16 150.619 150.684"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="none"
    style={{
      width: '100%',
      height: '100%'
    }}
  >
    <defs>
      <style>
        {
          ".tank_sq_sm_svg__st2{fill:none;stroke:#383739;stroke-width:1.8221;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
        }
      </style>
    </defs>
    <linearGradient
      id="tank_sq_sm_svg__SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={176.478}
      y1={180.002}
      x2={83.522}
      y2={18.998}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#7d7f80",
        }}
      />
      <stop
        offset={0.315}
        style={{
          stopColor: "#a8abac",
        }}
      />
      <stop
        offset={0.495}
        style={{
          stopColor: "#a8abac",
        }}
      />
      <stop
        offset={0.825}
        style={{
          stopColor: "#7d7f80",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#616365",
        }}
      />
    </linearGradient>
    <linearGradient
      id="tank_sq_sm_svg__SVGID_2_"
      gradientUnits="userSpaceOnUse"
      x1={130}
      y1={37.61}
      x2={130}
      y2={161.39}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#a8abac",
        }}
      />
      <stop
        offset={0.379}
        style={{
          stopColor: "#7d7f80",
        }}
      />
      <stop
        offset={0.437}
        style={{
          stopColor: "#717374",
        }}
      />
      <stop
        offset={0.524}
        style={{
          stopColor: "#656769",
        }}
      />
      <stop
        offset={0.613}
        style={{
          stopColor: "#616365",
        }}
      />
      <stop
        offset={0.808}
        style={{
          stopColor: "#7d7f80",
        }}
      />
      <stop
        offset={0.828}
        style={{
          stopColor: "#868889",
        }}
      />
      <stop
        offset={0.884}
        style={{
          stopColor: "#999b9c",
        }}
      />
      <stop
        offset={0.942}
        style={{
          stopColor: "#a4a7a8",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#a8abac",
        }}
      />
    </linearGradient>
    <path
      d="M182.7 173.1H77.3c-11.6 0-20.9-9.4-20.9-20.9V46.8c0-11.6 9.4-20.9 20.9-20.9h105.5c11.6 0 20.9 9.4 20.9 20.9v105.5c-.1 11.5-9.4 20.8-21 20.8z"
      style={{
        fill: "url(#tank_sq_sm_svg__SVGID_1_)",
      }}
    />
    <path
      d="M183.2 161.4H76.8c-4.8 0-8.7-3.9-8.7-8.7V46.3c0-4.8 3.9-8.7 8.7-8.7h106.3c4.8 0 8.7 3.9 8.7 8.7v106.3c.1 4.9-3.8 8.8-8.6 8.8z"
      style={{
        fill: "url(#tank_sq_sm_svg__SVGID_2_)",
      }}
    />
    <path
      className="tank_sq_sm_svg__st2"
      d="M182.7 173.1H77.3c-11.6 0-20.9-9.4-20.9-20.9V46.8c0-11.6 9.4-20.9 20.9-20.9h105.5c11.6 0 20.9 9.4 20.9 20.9v105.5c-.1 11.5-9.4 20.8-21 20.8z"
    />
    <path
      className="tank_sq_sm_svg__st2"
      d="M183.2 161.4H76.8c-4.8 0-8.7-3.9-8.7-8.7V46.3c0-4.8 3.9-8.7 8.7-8.7h106.3c4.8 0 8.7 3.9 8.7 8.7v106.3c.1 4.9-3.8 8.8-8.6 8.8z"
    />
  </svg>
);

SquareTank.metadata = {
  type: 'tank',
  width: 100,
  height: 100
}
