import { Box, Avatar, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { OptionsMenu } from "./components/OptionsMenu";
import { Date } from "./components/Date";
import { AppointProps, menuTypeProps, variantProps } from "./type";
import { Price } from "./components/Price";

interface ItemListProps {
  appoint: AppointProps;
  variant: variantProps;
  menuType: menuTypeProps;
  className?: string;
}

const ItemList: React.FC<ItemListProps> = ({
  appoint,
  variant = "date",
  className,
  menuType,
}) => {
  const { avatar, name, phone, date, medic } = appoint;
  return (
    <Box
      className={className}
      key={phone}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        my: 2,
        gap: { md: 1, sm: 1, xs: 0 },
      }}
    >
      <Box
        className="flex flex-col glap-1 sm:gap-2 sm:flex-row items-center"
        sx={{
          py: { xs: 0 },
        }}
      >
        <Avatar src={avatar} alt={`${name}`} />
        <Box
          className="flex flex-col sm:items-start
        "
        >
          <Typography fontSize={16}>{name}</Typography>
          <Box
            className="flex flex-row items-center justify-center 
          sm:items-start sm:justify-start sm:flex-col"
          >
            <PhoneAndroidIcon color="disabled" sx={{ width: 18 }} />
            <Typography fontSize={12} color="textDisabled">
              {phone}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Exibição condicional da data ou preço */}
      <Box>
        {variant === "date" ? <Date date={date} medic={medic} /> 
        :
        <Price variant={variant} price="250,00" />
        }
      </Box>

      <Box className="">
        <OptionsMenu menuType={menuType} item={appoint} />
      </Box>
    </Box>
  );
};

export { ItemList };
