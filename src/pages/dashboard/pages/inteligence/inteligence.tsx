import {useState} from 'react';
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Tab from "@mui/material/Tab";
import {TabList, TabContext, TabPanel} from '@mui/lab/'

import Copyright from "../../internals/components/Copyright";
import Detail3View from "src/pages/dashboard/components/Details3View";
import PageViewsBarChart from "src/pages/dashboard/components/Details3View";


const Intelligence = () => {
  const [valueTab, setValueTab] = useState('1');

  const handleChangeValueTab = (event: React.SyntheticEvent, newValue: string) => {
    setValueTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <TabContext value={valueTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeValueTab} aria-label="lab API tabs example">
            <Tab label="TAREFAS" value="1" />
            <Tab label="PERFORMANCE" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">TAREFAS</TabPanel>
        <TabPanel value="2">
        <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <Detail3View />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Detail3View />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Detail3View />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Detail3View />
        </Grid>
      </Grid>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>

      

      <Grid container spacing={2} columns={12}>
        <PageViewsBarChart />
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
};

export { Intelligence };
