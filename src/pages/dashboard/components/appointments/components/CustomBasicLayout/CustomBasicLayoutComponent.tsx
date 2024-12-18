import { Box } from "@mui/material";
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { InputAutoComplete } from "./components/ProfessionalAutoComplete";
import { PROFESSIONALS_DATA } from "./http/allProfessionals";
import { PACIENTS_DATA } from "./http/allPacients";

const CustomBasicLayoutComponent = (props: any) => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        px={4}
        pt={4}
        gap={2}
      >
        <InputAutoComplete data={PROFESSIONALS_DATA} label="PROFISSIONAL" />
        <InputAutoComplete data={PACIENTS_DATA} label="PACIENTES" />
      </Box>
      <AppointmentForm.BasicLayout {...props}>
        <Box>{props.children}</Box>
      </AppointmentForm.BasicLayout>
    </Box>
  );
};

export { CustomBasicLayoutComponent };
