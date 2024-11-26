import * as React from "react";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import MenuContent from "./MenuContent";
import OptionsMenu from "./OptionsMenu";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import PerfilImage from '../../../assets/perfil.jpg'
import Typography from "@mui/material/Typography";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >

        <Stack
          direction="row"
          sx={{
            p: 2,
            gap: 1,
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: "center",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <OptionsMenu />
          <Avatar
          sizes="large"
          alt="Lucrecia"
          src={PerfilImage}
          className="object-fill"
          sx={{ width: 80, height: 84 }}
        />
          <Box sx={{alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant="body2"
              className="line-clamp-1 text-center self-center"
              sx={{ fontWeight: 500, lineHeight: "16px" }}
            >
              Dr Lucrecia Silva
            </Typography>
            <Typography
              variant="caption"
              className="line-clamp-1 text-center self-center text-zinc-400"
              
              sx={{ fontWeight: 500, lineHeight: "16px" }}
            >
              drlucrecia@exemplo.com
            </Typography>
          </Box>
        </Stack>
          <Divider/>
      <MenuContent />
    </Drawer>
  );
}
