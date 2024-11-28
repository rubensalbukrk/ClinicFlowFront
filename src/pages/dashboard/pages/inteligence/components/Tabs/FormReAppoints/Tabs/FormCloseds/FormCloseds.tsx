import { Box } from "@mui/material";
import {ItemList} from 'dashboard/components/ItemList/ItemList'
import {ItemListProps} from 'dashboard/components/ItemList/type'
import ButtonMore from 'dashboard/components/ButtonMore/ButtonMore'
import { AppointsOn } from "../../../../FormAppointsOn/FormAppointsConfirms";

const FormCloseds = () => {
 return (
  <Box sx={{width: '100%'}}>
  {AppointsOn.map((item: ItemListProps) => {
      return <ItemList variant="price" {...item} />
  })}
  <ButtonMore onClick={() => null} />
</Box>
 );
}

export {FormCloseds}