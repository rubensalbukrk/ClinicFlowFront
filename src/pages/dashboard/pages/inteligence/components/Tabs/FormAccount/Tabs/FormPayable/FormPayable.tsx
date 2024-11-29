import { Box } from "@mui/material";
import { ItemList } from "dashboard/components/ItemList/ItemList";
import { AppointsOn } from "dashboard/pages/inteligence/components/FormAppointsOn/FormAppointsConfirms";
import { AppointProps } from "dashboard/components/ItemList/type";
import ButtonMore from "dashboard/components/ButtonMore/ButtonMore"

const FormPayable = () => {
 return (
   <Box sx={{
    width: '100%',
     flexDirection: 'column'
     }}>
        {AppointsOn.map((appoint: AppointProps) => {
            return <ItemList menuType="accountPay" variant="price-pay" appoint={appoint} />
        })}
         <ButtonMore onClick={() => alert('VER CONTAS A PAGAR')} />
   </Box>
 );
}

export {FormPayable}