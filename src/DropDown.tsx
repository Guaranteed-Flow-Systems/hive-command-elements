import React, { useMemo } from 'react';
import { Select, FormControl, InputLabel, MenuItem, Autocomplete  } from '@mui/material'

export interface DropdownProps {
    options?: {
        label: string,
        options: string[],
        value: string,
        onChange: (value: string) => void;
    }
}

export const Dropdown : React.FC<DropdownProps> = (props) => {

    console.log("Dropdown", props.options)
    const id = useMemo(() => (Math.random() * 100) + "", [])

    return (
        <FormControl fullWidth size="small">
            <InputLabel id={id}>{props.options?.label}</InputLabel>
            <Select
                labelId={id}
                label={props.options?.label}
                value={props.options?.value || ''}
                onChange={props.options?.onChange && ((e) => props.options?.onChange(e.target.value as string))}>
                    {(props.options?.options || []).map((option, ix) => (
                        <MenuItem key={ix} value={option}>{option}</MenuItem>
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