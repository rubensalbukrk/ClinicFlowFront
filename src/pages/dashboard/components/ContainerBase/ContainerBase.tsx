import {AppBar, Box, Typography} from '@mui/material'
import React from 'react'

type ContainerProps = {
  title?: string
  direction?: "column" | "row"
  children?: React.ReactNode
}

const ContainerBase: React.FC<ContainerProps> = (props) => {
  const {title, direction, children} = props;
  return (
        <Box
        flexDirection={direction === "column" ? "column" : "row" }
            sx={{ 
              display: 'grid',
              width: "100%",
              minWidth: 300,
              alignItems: "start",
              borderRadius: 1,
               bgcolor: 'background.paper'
            }}
          >
            <AppBar className='rounded-lg' position="static">
              <Typography
              fontSize={20}
              className="rounded-t-lg"
              sx={{width: '100%', p: 2, display: "flex", selfCenter: "start" }}
            >
              {title}
            </Typography>
            </AppBar>
            
            <Box
            sx={{ p: 2}}
            >
            {children}
            </Box>
          </Box>
    )
}

export { ContainerBase }