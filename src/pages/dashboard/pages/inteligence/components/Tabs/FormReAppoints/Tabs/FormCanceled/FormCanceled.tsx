import { Box } from "@mui/material";
import {ItemList} from 'dashboard/components/ItemList/ItemList'
import {AppointProps} from 'dashboard/components/ItemList/type'
import ButtonMore from 'dashboard/components/ButtonMore/ButtonMore'
import { AppointsOn } from "dashboard/pages/inteligence/components/FormAppointsOn/FormAppointsConfirms";

const FormCanceled = () => {
 return (
  <Box sx={{width: '100%'}}>
  {AppointsOn.map((appoint: AppointProps) => {
      return <ItemList menuType="reAppointsCancel" variant="date" appoint={appoint} />
  })}
  <ButtonMore onClick={() => null} />
</Box>
 );
}

export {FormCanceled}