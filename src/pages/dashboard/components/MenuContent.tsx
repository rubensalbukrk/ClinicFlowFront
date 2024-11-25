import * as React from "react";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import EventIcon from "@mui/icons-material/Event";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ListItemButton from "@mui/material/ListItemButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

const mainListItems = [
  { text: "Inicio", path: "/dashboard", icon: <HomeRoundedIcon /> },
  { text: "Agendamentos", path: "/appointments", icon: <EventIcon /> },
  { text: "Tarefas", path: "/services", icon: <AssignmentRoundedIcon /> },
  { text: "Analises", path: "/analytics", icon: <AutoGraphIcon /> },
  { text: "Clientes", path: "/clients", icon: <PeopleRoundedIcon /> },
];

const secondaryListItems = [
  { text: "Ajustes", icon: <SettingsRoundedIcon /> },
  { text: "Contato", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const [indexPrimaryMenu, setIndexPrimaryMenu] = React.useState<number | undefined>(undefined);
  const [indexSecondaryMenu, setIndexSecondaryMenu] = React.useState<number | undefined>(undefined);

  const navigation = useNavigate();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => [setIndexPrimaryMenu(index),
                setIndexSecondaryMenu(undefined),
                navigation(item.path)
              ]}
              selected={index === indexPrimaryMenu}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => [
                setIndexSecondaryMenu(index),
                setIndexPrimaryMenu(undefined),
              ]}
              selected={index === indexSecondaryMenu}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
