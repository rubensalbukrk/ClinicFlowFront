import { Box } from "@mui/material";
import { ItemList } from "../../../../ItemList/ItemList";
import { AppointsOn } from "../../../../FormAppointsOn/FormAppointsConfirms";
import { ItemListProps } from "../../../../ItemList/type";

const FormReceive = () => {
 return (
   <Box sx={{
    width: '100%',
     display: 'flex',
     flexDirection: 'column'
     }}>
        {AppointsOn.map((item: ItemListProps) => {
            return <ItemList variant="price" {...item} />
        })}
   </Box>
 );
}

export {FormReceive}