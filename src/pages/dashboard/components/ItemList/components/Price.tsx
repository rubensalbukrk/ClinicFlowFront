import { Box, colors, Typography } from "@mui/material"
import React from "react"

interface PriceProps {
  price: string
  className?: string
  variant: "receive" | "pay"
}

const Price: React.FC<PriceProps> = ({price, variant, className})=> {
return (
        <Box 
        className={`${className} self-center items-center shadow-md rounded-lg
                ${variant == "receive" && "bg-green-700 shadow-green-300/95"
                || variant == "pay" && "bg-red-500/70 shadow-red-400/95"} py-0.4 shadow-sm`} 
        sx={{
            px: {md:0.8, sm: 0.9, xs: 1.5},
        }}
        borderColor={colors.green[300]}>
          <Typography
          sx={{
            py: {md: 0.4},
            fontSize: {md: 15, sm: 18, xs: 14},
            color: 'white'
          }}>
          R$ {price}
          </Typography>
        </Box>
    );
}

export {Price}