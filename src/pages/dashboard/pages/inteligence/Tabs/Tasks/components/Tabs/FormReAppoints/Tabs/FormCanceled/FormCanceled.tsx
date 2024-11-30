import { Box } from "@mui/material";
import { ItemList } from "dashboard/components/ItemList/ItemList";
import { AppointProps } from "dashboard/components/ItemList/type";
import ButtonMore from "dashboard/components/ButtonMore/ButtonMore";
import { AppointsOn } from "../../../../FormAppointsOn/FormAppointsConfirms";

const dataAPI = AppointsOn;

const FormCanceled = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {dataAPI.map((appoint: AppointProps) => {
        return (
          <ItemList
            menuType="reAppointsCancel"
            variant="date"
            appoint={appoint}
          />
        );
      })}
      <ButtonMore onClick={() => null} />
    </Box>
  );
};

export { FormCanceled };
