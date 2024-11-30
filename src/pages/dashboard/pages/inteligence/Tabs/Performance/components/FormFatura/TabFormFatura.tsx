import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TabPanelProps } from 'dashboard/types/TabPanels';
import { FormProfessionals } from './Tabs/Professionals/FormProfressionals';

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: unknown) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabFormFatura() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderRadius: 1,
     bgcolor: 'background.paper', 
     width: '100%',
     minWidth: 320,
     }}
     >
      <AppBar className='rounded-lg' sx={{opacity: 1}} position="static">
      <Typography
              fontSize={20}
              className="rounded-t-lg"
              sx={{width: '100%', p: 2, display: "flex", selfCenter: "start" }}
            >
              FATURAMENTO
            </Typography>
        <Tabs
        className='rounded-md px-2'
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="appoints tabs"
          
        >
          <Tab label="PROFISSIONAIS" sx={{width: 'auto'}} {...a11yProps(0)} />
          <Tab label="PLANOS" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <FormProfessionals />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
       2
      </TabPanel>
    </Box>
  );
}

export {TabFormFatura}