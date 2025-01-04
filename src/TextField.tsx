import { Box, IconButton, InputAdornment, TextField as BaseTextField, TextFieldProps } from "@mui/material";
import { Check } from '@mui/icons-material';
import React, { useEffect, useState } from "react";

export const TextField = (props: { options: { onChange: (value: any) => void, type: string, label: string, value: any } }) => {
    
    const [ editing, setEditing ] = useState(false);
    const [ value, setValue ] = useState(props.options?.value)

    useEffect(() => {
        if(!editing) setValue(props.options?.value)
    }, [props.options?.value, editing])

    const changeValue = () => {
        props.options?.onChange?.(value)
        setEditing(false);
    }

    return (
        <Box sx={{flex: 1, display: 'flex'}}>
            <BaseTextField
                size="small"
                fullWidth
                onChange={(e) => { 
                    setEditing(true);
                    setValue(e.target.value);
                }}
                value={value || ''} 
                type={props.options?.type}
                InputProps={{
                    endAdornment: (editing && value != props.options?.value) ? <InputAdornment position="end">
                        <IconButton onClick={() => changeValue()} size="small">
                            <Check fontSize="inherit" />
                        </IconButton>
                </InputAdornment> : undefined
                }}
                label={props.options?.label} />
        </Box>
    )
}

TextField.metadata = {
    width: 150,
    height: 40,
    options: {
        onChange: 'Function',
        value: 'String',
        type: 'String',
        label: 'String'
    }
}