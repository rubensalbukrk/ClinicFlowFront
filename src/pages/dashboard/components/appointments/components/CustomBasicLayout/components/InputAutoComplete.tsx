import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import {IPacientsComplete} from '../types/pacient'
import {InputAutoCompleteProps} from '../types/autocomplete'
import {IProfessionalsComplete} from '../types/professional'

const InputAutoComplete: React.FC<InputAutoCompleteProps<IProfessionalsComplete | IPacientsComplete>> = ({data, value, label, onSelect}) => {
    const [inputValue] = useState(value);
    
    const handleChange = (_event: any, newValue: any) => {
      if (newValue && typeof newValue !== 'string') {
        onSelect(newValue);
      }
    }

    return (
      <Autocomplete
        fullWidth
        freeSolo
        options={data}
        getOptionLabel={(option) => 
          typeof option === 'string' ? option : option.name // Verifique se é string ou objeto
        }
        inputValue={inputValue}
        onChange={handleChange}
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