import * as React from "react";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import {
  EventNote, 
  PeopleRounded,
  FactCheck,
} from '@mui/icons-material';

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ListItemButton from "@mui/material/ListItemButton";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CostumizedTreeView from './CustomizedTreeView';

const mainListItems = [
  { text: "Inteligência", path: "/dashboard", icon: <HomeRoundedIcon /> },
  { text: "Agendamentos", path: "/appointments", icon: <EventNote /> },
  { text: "Pacientes", path: "/pacients", icon: <PeopleRounded /> },
  { text: "Financeiro", path: "/finance", icon: <AutoGraphIcon /> },
  { text: "Estoque", path: "/estoque", icon: <FactCheck /> },
];

const secondaryListItems = [
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const [indexPrimaryMenu, setIndexPrimaryMenu] = React.useState<number | undefined>(undefined);
  const [indexSecondaryMenu, setIndexSecondaryMenu] = React.useState<number | undefined>(undefined);

  const navigation = useNavigate();

  document.title = "Darshboard"

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
        <CostumizedTreeView />
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
