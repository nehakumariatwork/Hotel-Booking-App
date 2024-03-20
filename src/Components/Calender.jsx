import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
const Calender = () => {
    return (
      <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
    )
}

export default Calender