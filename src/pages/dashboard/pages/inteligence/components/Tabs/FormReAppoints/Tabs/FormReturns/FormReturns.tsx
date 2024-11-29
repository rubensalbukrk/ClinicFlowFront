import { Box } from "@mui/material";
import { ItemList } from "dashboard/components/ItemList/ItemList";
import { ItemListProps } from "dashboard/components/ItemList/type";
import { AppointsOn } from "dashboard/pages/inteligence/components/FormAppointsOn/FormAppointsConfirms";

const FormReturns = () => {
 return (
   <Box sx={{width: '100%'}}>
        {AppointsOn.map((item: ItemListProps) => {
            return <ItemList menuType="reAppointsReturn" variant="price" {...item} />
        })}
   </Box>
 );
}

export {FormReturns}