import { Box, Typography, LinearProgress } from "@mui/material";
import { FormatValueCurrency } from "dashboard/utils/FormatToCurrency";
import { ItemListFinanceProps } from "./type";

function ConvertToNumber(value: string) {
  const ConvertedValue = parseFloat(value.replace(".", "").replace(",", "."));
  return ConvertedValue;
}

const ItemListFinance: React.FC<ItemListFinanceProps> = ({
  id,
  type,
  value,
  total,
}) => {
  const valueToComplete = ConvertToNumber(total) - ConvertToNumber(value);
  const color =
    (id === 1 && "success") ||
    (id === 2 && "error") ||
    (id === 3 && "info") ||
    "info";

  return (
    <Box key={id} className="flex flex-col mb-7">
      <Typography className="self-start">
        {type}
      </Typography>

      <Box className="flex flex-row justify-between">
        <Typography className="self-start">
            {FormatValueCurrency(ConvertToNumber(value))}
        </Typography>
        {type === "SALDO" ? null : 
        (
        <Typography color="textDisabled" className="self-start">
          R$ {valueToComplete.toFixed(2).replace(".", ",")}
        </Typography>
        )}
      </Box>

      <LinearProgress
        color={color}
        variant="determinate"
        value={type === "SALDO" ? 100 : (ConvertToNumber(value) / ConvertToNumber(total)) * 100}
      />
      <Typography color="textDisabled" className="self-end">
        Total previsto: {total}
      </Typography>
    </Box>
  );
};

export { ItemListFinance };
