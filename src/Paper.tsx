import React from 'react';
import { Paper as MuiPaper } from '@mui/material'

export const Paper = () => {
    return (
        <MuiPaper sx={{flex: 1, width: '100%', height: '100%'}} />
    )
}

Paper.metadata = {
    width: 100,
    height: 100
};