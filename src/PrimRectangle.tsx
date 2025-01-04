import React from 'react';

export const Rectangle = (props: {options: any, width: number, height: number}) => {

    const strokeWidth = parseFloat(props.options?.strokeWidth || 0);


    return (
        <svg width={props.width} height={props.height}>
            <rect  
                x={strokeWidth / 2}
                y={strokeWidth / 2}
                fill={props.options?.fill || 'none'}
                width={props?.width - (strokeWidth)}
                height={props?.height - (strokeWidth + (strokeWidth / 2))}
                strokeWidth={props.options?.strokeWidth}
                stroke={props.options?.strokeColor || (!props.options?.fill ? 'black' : undefined)}
                rx={props.options?.rounded}
                ry={props.options?.rounded}
                />
        </svg>
    )
}

Rectangle.metadata = {
    width: 50,
    height: 50,
    options: {
        fill: 'String',
        strokeWidth: 'Number',
        strokeColor: 'String',
        rounded: 'Number'
    }
}