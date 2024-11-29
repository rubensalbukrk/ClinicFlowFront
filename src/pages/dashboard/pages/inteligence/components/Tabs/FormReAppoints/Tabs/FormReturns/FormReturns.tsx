import { Box } from "@mui/material";
import { ItemList } from "dashboard/components/ItemList/ItemList";
import { AppointProps } from "dashboard/components/ItemList/type";
import { AppointsOn } from "dashboard/pages/inteligence/components/FormAppointsOn/FormAppointsConfirms";

const FormReturns = () => {
 return (
   <Box sx={{width: '100%'}}>
        {AppointsOn.map((appoint: AppointProps) => {
            return <ItemList 
                      menuType="reAppointsReturn" 
                      variant="date" 
                      appoint={appoint} />
        })}
   </Box>
 );
}

export {FormReturns}