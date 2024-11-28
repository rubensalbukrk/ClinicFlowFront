import { Typography } from "@mui/material"

const Date = ( props: {date: Date, medic: string}  )=> {
    const {date, medic} = props;
    return (
        <>
        <Typography
        sx={{
            fontSize: {md: 14, sm: 18, xs: 14},
        }}
        >
            {date.getDate()}/{date.getDay()}/{date.getFullYear()} as{" "}
            {date.getHours()}:{date.getMinutes().toFixed(1).replace(".", "")}
        </Typography>
        <Typography
        sx={{
            fontSize: {md: 14, sm: 18, xs: 14},
        }}
         color="textDisabled">
            {medic}
        </Typography></>
    );
}

export {Date}