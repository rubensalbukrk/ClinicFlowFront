import { Box } from "@mui/material";
import { ItemList } from "dashboard/components/ItemList/ItemList";
import { AppointProps } from "dashboard/components/ItemList/type";
import { AppointsOn } from "../../../../FormAppointsOn/FormAppointsConfirms";
import ButtonMore from "src/pages/dashboard/components/ButtonMore/ButtonMore";

const dataAPI = AppointsOn;

const FormReturns = () => {
 return (
   <Box sx={{width: '100%'}}>
        {dataAPI.map((appoint: AppointProps) => {
            return <ItemList 
                      menuType="reAppointsReturn" 
                      variant="date" 
                      appoint={appoint} />
        })}
        <ButtonMore onClick={() => alert('VER MAIS ALERTAS DE RETORNO')} />
   </Box>
 );
}

export {FormReturns}