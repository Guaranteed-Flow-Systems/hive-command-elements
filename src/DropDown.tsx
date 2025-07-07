import React from 'react';
import { Select, FormControl, InputLabel, MenuItem, Autocomplete, TextField  } from '@mui/material'

export interface DropdownProps {
    options?: {
        label: string,
        options: string[],
        value: string,
        onChange: (value: string) => void;
    }
}

export const Dropdown : React.FC<DropdownProps> = (props) => {
    console.log("Options", props.options)
    return (
        <Autocomplete
            options={props.options?.options || []}
            value={props.options?.value}
            onChange={props.options?.onChange && ((e, newValue) => props.options?.onChange(newValue as any))}
            renderInput={(params) => <TextField {...params} size="small" label={props.options?.label} />}
        />
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