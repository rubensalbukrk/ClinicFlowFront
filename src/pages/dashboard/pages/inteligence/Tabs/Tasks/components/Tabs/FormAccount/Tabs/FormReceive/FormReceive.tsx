import { Box } from "@mui/material";
import { ItemList } from "dashboard/components/ItemList/ItemList";
import { AppointProps } from "dashboard/components/ItemList/type";
import ButtonMore from 'dashboard/components/ButtonMore/ButtonMore'

import { AppointsOn } from "../../../../FormAppointsOn/FormAppointsConfirms";
const dataAPI = AppointsOn;

const FormReceive = () => {
 return (
   <Box sx={{
    width: '100%',
     flexDirection: 'column'
     }}>
        {dataAPI.map((appoint: AppointProps) => {
            return <ItemList menuType="accountReceive" variant="price" appoint={appoint}/>
        })}
         <ButtonMore onClick={() => alert('VER CONTAS A RECEBER')} />
   </Box>
 );
}

export {FormReceive}