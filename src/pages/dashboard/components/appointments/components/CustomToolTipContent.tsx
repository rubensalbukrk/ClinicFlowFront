import { Box, Typography } from "@mui/material";
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { FaRegUser } from "react-icons/fa6";
import { colorSchemes } from "../../shared-theme/themePrimitives";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";

const CustomToolTipContent = (props: any) => (
  <AppointmentTooltip.Content {...props}>
    <Box display="flex" flexDirection="column" mt={1.2} rowGap={2}>
        <Box ml={2.7} display="flex" flexDirection="row" gap={3}>
          <FaUserMd
            color={colorSchemes.light.palette.grey[600]}
            opacity={0.9}
            size={18}
          />
          <Typography>{props.appointmentData.professionalName}</Typography>
        </Box>
      <Box ml={2.7} display="flex" flexDirection="row" gap={3}>
        <FaRegUser
          color={colorSchemes.light.palette.grey[600]}
          opacity={0.9}
          size={18}
        />
        <Typography>{props.appointmentData.pacient}</Typography>
      </Box>
      <Box ml={2.7} display="flex" flexDirection="row" gap={3}>
        <MdOutlinePhoneAndroid
          color={colorSchemes.light.palette.grey[600]}
          opacity={0.9}
          size={18}
        />
        <Typography>{props.appointmentData.phone}</Typography>
      </Box>
    </Box>
  </AppointmentTooltip.Content>
);
export { CustomToolTipContent };
