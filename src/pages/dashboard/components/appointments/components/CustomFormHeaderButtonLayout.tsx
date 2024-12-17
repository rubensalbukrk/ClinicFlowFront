import { Box, Button, colors } from "@mui/material";
import { BiSolidSave } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import AppointmentService from "src/services/http/HttpAppointment";

const appointmentService = new AppointmentService()

const CustomFormHeaderButtomLayout = ({
    onCommitButtonClick,
    onCancelButtonClick,
    state
  }: {
    onCommitButtonClick: () => void;
    onCancelButtonClick: () => void;
    state: any
  }) => {
    const handleCommitChanges = async () => {
      const newAppointment = state.addedAppointment;

      if (
        "startDate" in newAppointment &&
        "endDate" in newAppointment &&
        "title" in newAppointment
      ) {
        await appointmentService
          .CREATE(state.addedAppointment)
          .finally(() => onCommitButtonClick());
      }

      if (state.editingAppointment.id) {
        const appointUpdated = {
          ...state.editingAppointment,
          ...state.appointmentChanges,
        };
        await appointmentService
          .UPDATE(appointUpdated)
          .finally(() => onCommitButtonClick());
      }
    };

    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          bgcolor: colors.green[500],
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Button
          sx={{
            color: "white",
            ":hover": { color: "black" },
          }}
          onClick={onCancelButtonClick}
        >
          <RiCloseCircleLine size={28} />
        </Button>
        <Button
          sx={{
            color: "white",
            ":hover": {
              color: "black",
            },
            fontWeight: 400,
            gap: 1,
          }}
          variant="outlined"
          className="hover:text-black"
          onClick={handleCommitChanges}
        >
          <BiSolidSave size={24} /> SALVAR
        </Button>
      </Box>
    );
  };

  export {CustomFormHeaderButtomLayout}