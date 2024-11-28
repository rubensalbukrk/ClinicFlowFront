import { colors, Typography } from "@mui/material"

const Price = ( props: {price: number}  )=> {
    return (
        <Typography 
        className="px-1 ring-1 ring-offset-1 ring-green-400 bg-green-300"
        sx={{
            fontSize: {md: 10 }
        }}
        borderColor={colors.green[300]}>
           R$ {props.price.toFixed(2)}
        </Typography>
    );
}

export {Price}