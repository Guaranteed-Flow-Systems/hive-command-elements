import * as React from "react";
import { SVGProps } from "react";

export const Agitator = (props: {options: any}) => (
  <svg
    onClick={props.options?.onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 283.46 283.46"

    xmlSpace="preserve"
  >
    <path
      d="m278.03 228.78-26.55-22.31c-6.92-5.77-16.54-7.69-25.39-4.23l-55.78 21.16c-2.69-10.39-11.54-18.47-22.7-19.62V48.34h7.59c5.74 0 10.4-4.66 10.4-10.4v-5.46c0-5.74-4.66-10.4-10.4-10.4h-29.5c-5.74 0-10.4 4.66-10.4 10.4v5.46c0 5.74 4.66 10.4 10.4 10.4h7.68v155.81c-10 1.92-18.08 9.23-20.77 19.24l-55.4-21.16c-8.85-3.46-18.47-1.54-25.39 4.23L5.26 228.78c-4.62 3.85-3.46 10.77 1.92 13.08l36.16 15.39c13.85 6.16 30.01 5.39 43.09-1.92l27.7-15c4.23 9.23 13.08 15.77 23.85 15.77h6.92c10.77 0 20.01-6.54 23.85-15.77l28.08 15c13.08 7.31 29.24 8.08 43.09 1.92l36.16-15.39c5.41-2.31 6.57-9.24 1.95-13.08z"
      style={{
        fill: props.options?.on ? "#4d4d4e" : 'none',
        stroke: props.options?.on ? undefined : '#4d4d4e' 
      }}
    />
  </svg>
);

Agitator.metadata = {
  width: 50,
  height: 50,
  options: {
    on: 'Boolean',
    onClick: 'Function'
  }
}