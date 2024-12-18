import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import {IPacientsComplete} from '../types/pacient'
import {InputAutoCompleteProps} from '../types/autocomplete'
import {IProfessionalsComplete} from '../types/professional'

const InputAutoComplete: React.FC<InputAutoCompleteProps<IProfessionalsComplete | IPacientsComplete>> = ({data, label}) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState<IPacientsComplete | IProfessionalsComplete>({} as IPacientsComplete | IProfessionalsComplete);
   
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