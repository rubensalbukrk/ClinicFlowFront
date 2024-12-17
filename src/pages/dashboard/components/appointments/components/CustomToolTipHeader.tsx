import { Box, Button, colors } from "@mui/material";
import { RiCloseCircleLine, RiDeleteBin5Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import AppointmentService from "src/services/http/HttpAppointment";

const appointmentService = new AppointmentService()

const CustomToolTipHeader = ({
    appointmentData,
    onHide,
    onOpenButtonClick,
    onDeleteButtonClick,
  }: any) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        width: "100%",
        p: 0.5,
        py: 0.7,
        gap: 2,
        bgcolor: colors.green[500],
      }}
    >
      <Box sx={{ display: "absolute", width: "80%" }}>
        <Button sx={{
          color: 'white',
          ":hover": {color: 'black'}
        }} onClick={onHide}>
          <RiCloseCircleLine size={22} />
        </Button>
      </Box>
      <Button
        sx={{
          bgcolor: colors.red[500],
          color: "white",
          ":hover": { color: colors.red[500]}
        }}
        onClick={() => {
          onDeleteButtonClick();
          appointmentService.DELETE(appointmentData?.id);
        }}
      >
        <RiDeleteBin5Line size={22} />
      </Button>
  
      <Button
        sx={{
          bgcolor: colors.blue[600],
          color: "white",
          ":hover": { color: colors.blue[600]}
        }}
        onClick={() => {
          onHide();
          onOpenButtonClick();
        }}
      >
        <TiEdit size={22} />
      </Button>
    </Box>
  );

  export {CustomToolTipHeader}