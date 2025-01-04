import React from 'react';
import { Select, FormControl, InputLabel, MenuItem  } from '@mui/material'

export interface DropdownProps {
    options?: {
        label: string,
        options: string[],
        value: string,
        onChange: (value: string) => void;
    }
}

export const Dropdown : React.FC<DropdownProps> = (props) => {

    return (
        <FormControl fullWidth size="small">
            <InputLabel>{props.options?.label}</InputLabel>
            <Select
                label={props.options?.label}
                value={props.options?.value || ''}
                onChange={props.options?.onChange && ((e) => props.options?.onChange(e.target.value as string))}>
                    {props.options?.options?.map((option) => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))}
            </Select>
        </FormControl>
    )
}

(Dropdown as any).metadata = {
    width: 125,
    height: 50,
    options: {
        label: 'String',
        options: '[String]',
        value: 'String',
        onChange: 'Function'
    }
}