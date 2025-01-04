import React from 'react';

export const Circle = (props: {options: any, width: number}) => {
    return (
        <svg width={props.width} height={props.width}>
            <circle 
                fill={props.options?.fill || 'none'}
                stroke={props.options?.strokeColor}
                r={props?.width / 2} />
        </svg>
    )
}

Circle.metadata = {
    width: 50,
    height: 50,
    options: {
        fill: 'String',
        strokeColor: 'String'
    }
}