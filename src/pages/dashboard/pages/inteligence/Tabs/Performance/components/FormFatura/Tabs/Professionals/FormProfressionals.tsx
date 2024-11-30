import { Box, Typography } from "@mui/material";
import React from "react";
import { InvoiceProps } from "dashboard/types/InvoiceProps";
import {OptionsMenu} from 'dashboard/components/ItemList/components/OptionsMenu'

const dataAPI: InvoiceProps[] = [
    {
        id: 1,
        name: 'Maria Cavalcante',
        recipes: 13,
        value: 290.80,
    }, 
    {
        id: 2,
        name: 'João Batista',
        recipes: 10,
        value: 256.90,
    }, 
    {
        id: 3,
        name: 'Ana Clara Nascimento',
        recipes: 16,
        value: 341.50,
    }, 
    {
        id: 4,
        name: 'Carlos Eduardo',
        recipes: 9,
        value: 150.70,
    }, 
]

interface ItemListProps {
invoice: InvoiceProps
}

const ItemList: React.FC<ItemListProps> = ({invoice}) => {
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

const FormProfessionals = () => {
 return (
   <Box>
       {dataAPI.map((invoice: InvoiceProps) => <ItemList invoice={invoice} /> )}
   </Box>
 );
}

export {FormProfessionals}