import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

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
      <DemoContainer sx={{width: 200 }} components={["DatePicker"]}>
        <DatePicker
            maxDate={currentYear} 
            yearsOrder="desc"
            value={date}
            onChange={(value) => setDate(value) }
            label="Escolha o ano" 
            openTo="year" />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export {DataPickerSelect}
