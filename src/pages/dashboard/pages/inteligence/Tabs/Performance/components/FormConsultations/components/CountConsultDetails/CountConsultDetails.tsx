import { Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface CountCountDetailProps {
  count: number;
  title: string;
  color?: "error" | "primary" | "secondary";
  onClick: MouseEventHandler;
}

const CountConsultDetail: React.FC<CountCountDetailProps> = (props) => {
  const { count, title, color = "primary", onClick } = props;

  return (
    <>
      <Typography color={color} fontSize={26}>
        {count}
      </Typography>
      <Typography color="textDisabled">{title}</Typography>
      <Typography
        color="info"
        onClick={onClick}
        sx={{
          fontStyle: "inherit",
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        VER
      </Typography>
    </>
  );
};

export { CountConsultDetail };
