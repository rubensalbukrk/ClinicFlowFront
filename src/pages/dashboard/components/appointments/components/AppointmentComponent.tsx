import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";
import { colorSchemes } from "../../shared-theme/themePrimitives";

const CustomAppointmentComponent = ({ children, style, ...restProps }: any) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: colorSchemes.light.palette.primary.main,
      borderRadius: "8px",
      fontSize: 14,
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    }}
  >
    {children}
  </Appointments.Appointment>
);

export {CustomAppointmentComponent}