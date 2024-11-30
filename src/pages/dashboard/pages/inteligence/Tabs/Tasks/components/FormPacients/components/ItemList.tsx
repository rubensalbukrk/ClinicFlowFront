import { Box, Typography, Divider } from "@mui/material";

interface ItemListPacientProp {
    id: number
    type: string
    count: number
}

const ItemListPacient = ({id, type, count}: ItemListPacientProp) => {
  return (
    <Box className="w-full flex flex-col mb-2">
        {id == 1 ? null :  <Divider/>}
        <Typography
        fontSize={22}
        className="self-start text-green-600">
            {count}
        </Typography>
        <Typography className="self-start">
            {type}
        </Typography>
    </Box>
  );
}

export {ItemListPacient}
