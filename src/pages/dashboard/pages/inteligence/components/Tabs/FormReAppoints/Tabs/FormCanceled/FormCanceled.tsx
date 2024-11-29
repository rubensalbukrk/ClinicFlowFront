import { Box } from "@mui/material";
import {ItemList} from 'dashboard/components/ItemList/ItemList'
import {ItemListProps} from 'dashboard/components/ItemList/type'
import ButtonMore from 'dashboard/components/ButtonMore/ButtonMore'
import { AppointsOn } from "../../../../FormAppointsOn/FormAppointsConfirms";

const FormCanceled = () => {
 return (
  <Box sx={{width: '100%'}}>
  {AppointsOn.map((item: ItemListProps) => {
      return <ItemList menuType="reAppointsCancel" variant="price" {...item} />
  })}
  <ButtonMore onClick={() => null} />
</Box>
 );
}

export {FormCanceled}