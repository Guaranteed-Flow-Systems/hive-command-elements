import React from 'react';
import { Button as ButtonUnstyled } from '@mui/material'

export interface ButtonProps {
    options: {
        text?: any;
        color?: any;
        disabled?: boolean;
        textColor?: any;
        onClick?: () => void;
    }
}

export const Button : React.FC<ButtonProps> = (props) => {
    return (
        <ButtonUnstyled
            variant="contained"
            fullWidth
            color="primary"
            // disabled={props.options?.disabled}
            onClick={props.options?.onClick}
            sx={{
                opacity: props.options?.disabled ? '0.6' : 1,
                height: '100%',
                // background: props.color,
                border: 0,
                borderRadius: '0.375em',
                color: props.options?.textColor,
                cursor: 'pointer',
                // margin: '1.5em auto',
                padding: '0.5em 1em',
                
            }}
            >
            <span 
                style={{
                    display: 'block'
                }}
                tabIndex={-1}>{props.options?.text || "Button"}</span>
        </ButtonUnstyled>
    )
}

(Button as any).metadata = {
    width: 125,
    height: 50,
    options: {
        text: 'String',
        textColor: 'String',
        disabled: 'Boolean',
        onClick: 'Function'
    }
}