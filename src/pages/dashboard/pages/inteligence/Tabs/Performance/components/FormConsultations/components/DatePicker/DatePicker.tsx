import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Box, TextField } from "@mui/material";

const currentYear = dayjs();

const DataPickerSelect = () => {
    const [date, setDate] = useState<Dayjs | null>()

  return (
    <LocalizationProvider
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
      dateAdapter={AdapterDayjs}
    >
      <Box sx={{width: 200 }}>
        <DatePicker
            maxDate={currentYear} 
            renderInput={props => <TextField {...props} />}
            value={date}
            onChange={(value) => setDate(value) }
            label="Escolha o ano" 
            openTo="year" />
      </Box>
    </LocalizationProvider>
  );
};

export {DataPickerSelect}
