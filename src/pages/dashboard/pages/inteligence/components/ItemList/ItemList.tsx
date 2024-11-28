import { Box, Avatar, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import OptionsMenu from "./components/OptionsMenu";
import { Date } from "./components/Date";
import { ItemListProps } from "./type";
import { Price } from "./components/Price";

const ItemList: React.FC<ItemListProps> = (props: ItemListProps) => {
  const { avatar, name, phone, date, medic, variant = "date" } = props;
  return (
    <Box
      key={phone}
      sx={{
        display: "flex",
        width: '100%',
        alignItems: 'center',
        gap: {md: 1, sm: 2, xs: 0},
        justifyContent: {sm:  "space-between", md: "space-evenly"},
      }}
    >
      <Avatar src={avatar} alt={`${name}`} />
      <Box className="w-full flex flex-row justify-between items-center gap-2">
      
        <Box className="flex flex-col items-start -gap-1">
          <Typography fontSize={16}>{name}</Typography>
          <Box className="relative flex flex-row -left-1 items-center">
            <PhoneAndroidIcon color="disabled" sx={{ width: 18 }} />
            <Typography fontSize={12} color="textDisabled">
              {phone}
            </Typography>
          </Box>
        </Box>

        {/* Exibição condicional da data ou preço */}
        <Box>
          {variant === "date" ? (
            <Date date={date} medic={medic} />
          ) : (
            <Price price={Math.random()} />
          )}
        </Box>

        <Box className="w-16">
          <OptionsMenu appoint={props} />
        </Box>

      </Box>
    </Box>
  );
};

export { ItemList };
