import { Typography } from "@mui/material"

const Date = ( props: {date: Date, medic: string}  )=> {
    const {date, medic} = props;
    return (
        <>
        <Typography textAlign='start'>
            {date.getDate()}/{date.getDay()}/{date.getFullYear()} as{" "}
            {date.getHours()}:{date.getMinutes().toFixed(1).replace(".", "")}
          </Typography>
          <Typography textAlign='start' fontSize={15} color="textDisabled">
            {medic}
        </Typography></>
    );
}

export {Date}