import { useState } from "react";
import { AppBar, Box, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Tab from "@mui/material/Tab";
import { TabList, TabContext, TabPanel } from "@mui/lab/";

import Copyright from "../../internals/components/Copyright";
import Detail3View from "src/pages/dashboard/components/Details3View";
import PageViewsBarChart from "src/pages/dashboard/components/Details3View";
import AppointmentsTab from "./Tabs/appointsTab";
import AccountTab from "./Tabs/accountTab";

const Intelligence = () => {
  const [valueTab, setValueTab] = useState("1");

  const handleChangeValueTab = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValueTab(newValue);
  };

  const TabContentTask = () => {
    return (
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "start" }}
          size={{ xs: 12, sm: 6 }}
        >
          <Box
            sx={{
              width: "100%",
              alignItems: "start",
              backgroundColor: "whitesmoke",
            }}
          >
            <AppBar position="static">
              <Typography
              fontSize={20}
              className="rounded-t-lg"
              sx={{width: '100%', p: 2, display: "flex", selfCenter: "start" }}
            >
              CONSULTAS A CONFIRMAR
            </Typography>
            </AppBar>
            

            <Box
            sx={{ p: 2}}
            >
            <Typography>
              LUANA SANTOS
            </Typography>
            </Box>
          </Box>

          <AppointmentsTab />

        </Grid>

        <Grid
          container
          direction="column"
          spacing={2}
          sx={{ display: "flex", alignItems: "start" }}
          size={{ xs: 12, md: 6 }}
        >
          <AccountTab />
          <Box
            sx={{
              width: "100%",
              alignItems: "start",
              p: 2,

              backgroundColor: "whitesmoke",
            }}
          >
            <Typography
              fontSize={20}
              sx={{ display: "flex", selfCenter: "start" }}
            >
              PACIENTES
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const TabContentPerformance = () => {
    return (
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Detail3View />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Detail3View />
        </Grid>
      </Grid>
    );
  };

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <TabContext value={valueTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            centered
            onChange={handleChangeValueTab}
            aria-label="intelligence tabs"
          >
            <Tab label="TAREFAS" value="1" />
            <Tab label="PERFORMANCE" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TabContentTask />
        </TabPanel>
        <TabPanel value="2">
          <TabContentPerformance />
        </TabPanel>
      </TabContext>


      <Copyright sx={{ my: 4 }} />
    </Box>
  );
};

export { Intelligence };
