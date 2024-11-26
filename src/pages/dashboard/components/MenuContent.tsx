import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import CostumizedTreeView from './CustomizedTreeView';

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <CostumizedTreeView />

      <List dense>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected
            >
              <ListItemIcon>
                <HelpRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Suporte" secondary="Reportar problema" />
            </ListItemButton>
          </ListItem>
    
      </List>
    </Stack>
  );
}
