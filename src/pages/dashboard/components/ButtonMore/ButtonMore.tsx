import { Button, Typography } from "@mui/material";

export default function ButtonMore(
    props: {
        onClick: () => void
    }
) {
 return (
    <Button onClick={props.onClick} sx={{mt: 3}} variant="outlined" color="success">
    <Typography fontWeight={700} color="success">
      VER MAIS
    </Typography>
  </Button>
 );
}