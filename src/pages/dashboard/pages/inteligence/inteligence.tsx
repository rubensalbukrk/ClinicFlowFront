import { useState } from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import { TabList, TabContext, TabPanel } from "@mui/lab/";
import Copyright from "../../internals/components/Copyright";

import { TabContentTask } from "./Tabs/Tasks/tasks";
import { TabContentPerformance } from "./Tabs/Performance/performance";

const Intelligence = () => {
  const [valueTab, setValueTab] = useState("1");

  const handleChangeValueTab = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValueTab(newValue);
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
        <TabPanel sx={{py: 5, px: 0}} value="1">
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
