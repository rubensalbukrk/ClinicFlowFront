import { Box } from "@mui/material";
import { ItemList } from "dashboard/components/ItemList/ItemList";
import { AppointProps } from "dashboard/components/ItemList/type";
import ButtonMore from "dashboard/components/ButtonMore/ButtonMore";

import { AppointsOn } from "../../../../FormAppointsOn/FormAppointsConfirms";
const dataAPI = AppointsOn;

const FormPayable = () => {
  return (
    <Box
      sx={{
        width: "100%",
        flexDirection: "column",
      }}
    >
      {dataAPI.map((appoint: AppointProps) => {
        return (
          <ItemList
            menuType="accountPay"
            variant="pay"
            appoint={appoint}
          />
        );
      })}
      <ButtonMore onClick={() => alert("VER CONTAS A PAGAR")} />
    </Box>
  );
};

export { FormPayable };
