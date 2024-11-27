import { useState } from "react";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid2";
import { AccountTab } from "./components/Tabs/FormAccount/accountTab";
import { FormAppointsTab } from "./components/Tabs/FormReAppoints/appointTab";
import { Box } from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab/";
import Copyright from "../../internals/components/Copyright";
import Detail3View from "src/pages/dashboard/components/Details3View";
import { FormAppointsConfirm } from "./components/FormAppointsOn/FormAppointsConfirms";
import { FormPacients } from "./components/FormPacients/FormPacients";

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
        spacing={6}
        columns={12}
        sx={{ width: '100%', mb: (theme) => theme.spacing(2) }}
      >
        {/**** CONSULTAS ****/}
        <Grid
          container
          spacing={4}
          sx={{ 
            display: "flex", alignItems: "start" }}
          size={{ xs: 12, md: 7, sm: 12 }}
        >
          <FormAppointsConfirm />
          <FormAppointsTab />
        </Grid>
        {/**** ACCOUNTS, PACIENTS ****/}
        <Grid
          direction="column"
          container
          spacing={4}
          sx={{display: "flex", flexDirection: 'column'}}
          size={{ xs: 12, md: 5 }}
        >
          <AccountTab />
          <FormPacients />
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
