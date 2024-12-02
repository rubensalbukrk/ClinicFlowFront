import { Box } from "@mui/material";
import { InvoiceProps } from "dashboard/types/InvoiceProps";
import { ItemListProfessionals } from "./components/ItemListProfessionals/ItemListProfessionals";
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

const FormProfessionals = () => {
 return (
   <Box>
       {dataAPI.map((invoice: InvoiceProps) => <ItemListProfessionals invoice={invoice} /> )}
   </Box>
 );
}

export {FormProfessionals}