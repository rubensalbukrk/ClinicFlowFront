import { Box, Avatar, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { ItemListAppointsConfirmProps } from "../../../../types";
import OptionsMenu from "./components/OptionsMenu";

const AppointItemList: React.FC<ItemListAppointsConfirmProps> = (props: ItemListAppointsConfirmProps) => {
  const {name, phone, date, medic} = props;
  return (
    <Box
      key={phone}
      className="flex flex-row m-1 items-center justify-between"
    >
      <Box
        className="flex flex-row items-center gap-2"
      >
        <Avatar src="Perfil" alt={`${name}`} />
        <Box className='flex flex-col items-start -gap-1'>
          <Typography fontSize={16}>
            {name}
            </Typography>
          <Box className="relative flex flex-row -left-1 items-center">
          <PhoneAndroidIcon color="disabled" sx={{width: 18}} />
          <Typography fontSize={12} color="textDisabled">
            {phone}
          </Typography>
          </Box>
        </Box>
      </Box>

      <Box className='flex flex-col'>
        <Typography className="text-start">
           {date.getDate()}/{date.getDay()}/{date.getFullYear()} as {date.getHours()}:{date.getMinutes().toFixed(1).replace('.','')}
        </Typography>
        <Typography className="text-start" fontSize={15} color="textDisabled">
          {medic}
          </Typography>
      </Box>

      <Box className="w-16 flex">
          <OptionsMenu appoint={props} />
      </Box>
    </Box>
  );
};

export { AppointItemList };
