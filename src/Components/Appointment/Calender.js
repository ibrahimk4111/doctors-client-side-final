import React from 'react';
//material ui
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export default function Calender({date, setDate}){
    
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns} sx={{backgroundColor:'#00bed9'}}>
            <StaticDatePicker  
                orientation="landscape"
                openTo="day"
                value={date}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}