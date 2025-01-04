import { Box } from "@mui/material";
import * as React from "react";
import { SVGProps } from "react";

export const Water = (props: { options?: { color?: string, level: number, onClick?: () => void } }) => {

  return (
    <Box
      onClick={props.options?.onClick}
      sx={{ width: '100%', height: '100%' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2.5 2 40 40"
        xmlSpace="preserve"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          transformOrigin: '0 bottom',
          transform: `scaleY(${((props.options?.level != undefined ? props.options?.level : 100) / 100)})`
        }}
      >
        <path
          fill={props.options?.color || "#4AE5FF"}
          d="M41.4 35.5c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5V8.1c0-2.8 2.2-5 5-5h27.3c2.8 0 5 2.3 5 5v27.4z"
          opacity={0.5}
        />
        <path
          fill="none"
          stroke={props.options?.color || "#4AE5FF"}
          strokeMiterlimit={10}
          d="M41.4 35.5c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5V8.1c0-2.8 2.2-5 5-5h27.3c2.8 0 5 2.3 5 5v27.4z"
        />
      </svg>
    </Box>
  );
}
Water.metadata = {
  width: 100,
  height: 100,
  options: {
    level: 'Number',
    color: 'String',
    onClick: 'Function'
  }
}



