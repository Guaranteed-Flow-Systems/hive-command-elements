import { Box, TextField, TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers"
import React from "react";

export const DateInput = (props: { options: { onChange?: (date: Date) => void, label: string, value: Date } }) => {
    return (
        <Box sx={{flex: 1, display: 'flex'}}>
            <DatePicker 
                label={props.options?.label}
                inputFormat={`DD/MM`}
                onChange={(value) => value && props.options?.onChange?.( (value as any).toDate() )} 
                value={props.options?.value} 
                renderInput={(params) => <TextField fullWidth size="small" {...params} />} />
        </Box>
    )
}

DateInput.metadata = {
    width: 150,
    height: 50,
    options: {
        onChange: 'Function',
        value: 'Date',
        label: 'String'
    }
}