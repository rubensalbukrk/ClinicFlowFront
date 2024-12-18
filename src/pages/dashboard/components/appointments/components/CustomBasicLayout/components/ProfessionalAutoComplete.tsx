import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface IProfessionalsComplete {
    professionalId: string
    name: string
}

interface IPacientsComplete {
    pacientId: string
    name: string
}

interface InputAutoCompleteProps<T> {
    data: T[]
    label: string
}

const InputAutoComplete: React.FC<InputAutoCompleteProps<IProfessionalsComplete | IPacientsComplete>> = ({data, label}) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState({});
  
    return (
      <Autocomplete
        fullWidth
        freeSolo
        options={data}
        getOptionLabel={(option) => 
          typeof option === 'string' ? option : option.name // Verifique se é string ou objeto
        }
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue); // Atualiza o valor ao digitar
        }}
        onChange={(_event, newValue) => {
          if (newValue && typeof newValue !== 'string') {
            setSelectedItem(newValue); // Atualiza se newValue for um objeto Professional
          }
          console.log('Usuário selecionado:', newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              display: 'flex',
              width: '50%'
            }}
            variant="outlined" 
            placeholder={label.toLocaleLowerCase()} 
            label={label}
          />
        )}
      />
    );
  };

  export {InputAutoComplete}