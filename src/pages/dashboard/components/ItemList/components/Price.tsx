import { Box, colors, Typography, useTheme } from "@mui/material"

const Price = ( props: {price: string}  )=> {
    const theme = useTheme()
return (
        <Box 
        className={`self-center items-center shadow-md rounded-lg shadow-green-300/90 ring-1 ring-offset-black ring-offset-0 ring-green-700/20 
            ${theme.palette.mode === 'dark' 
                ? "text-green-500 bg-transparent py-1 shadow-sm" 
                : " text-white shadow-green-700/60 bg-green-500"}`}
        sx={{
            px: {md:0.8, sm: 0.9, xs: 1.5},
        }}
        borderColor={colors.green[300]}>
          <Typography
          sx={{
            py: {md: 0.4},
            fontSize: {md: 15, sm: 18, xs: 14}
          }}>
          R$ {props.price}
          </Typography>
        </Box>
    );
}

export {Price}