import { Box, Typography } from "@mui/material";
import { OptionsMenu } from "dashboard/components/ItemList/components/OptionsMenu";
import { InvoiceProps } from "src/pages/dashboard/types/InvoiceProps";

interface ItemListProps {
  invoice: InvoiceProps
  }
  
  const ItemListProfessionals: React.FC<ItemListProps> = ({invoice}) => {
      const {name, recipes, value} = invoice;
      return (
        <Box className="flex justify-between my-4">
          <Box className="flex flex-col items-start">
              <Typography>
              {name}
             </Typography>
             <Typography color="textDisabled">
              {recipes} receitas
             </Typography>
          </Box>
          <Box className="flex flex-row items-center gap-6">
          <Box className="flex flex-col items-start">
              <Typography>
              Receitas
             </Typography>
             <Typography color="textDisabled">
              R$ {value.toFixed(2)}
             </Typography>
          </Box>
          <OptionsMenu item={invoice} menuType="invoiceProfessionals" />
          </Box>
        </Box>
      );
     }

     export {ItemListProfessionals}