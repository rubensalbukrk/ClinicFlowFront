import { Box } from "@mui/material";
import { ItemList } from "../../../../ItemList/ItemList";
import { AppointsOn } from "../../../../FormAppointsOn/FormAppointsConfirms";
import { ItemListProps } from "../../../../ItemList/type";

const FormReturns = () => {
 return (
   <Box sx={{width: '100%'}}>
        {AppointsOn.map((item: ItemListProps) => {
            return <ItemList variant="price" {...item} />
        })}
   </Box>
 );
}

export {FormReturns}