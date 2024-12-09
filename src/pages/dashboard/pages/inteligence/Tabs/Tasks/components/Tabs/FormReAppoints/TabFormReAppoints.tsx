import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TabPanelProps } from 'dashboard/types/TabPanels';
import { FormCanceled } from './Tabs/FormCanceled/FormCanceled';
import { FormReturns } from './Tabs/FormReturns/FormReturns';

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

function FormAppointsTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      bgcolor: 'background.paper', 
      borderRadius: 1,
      width: '100%' }}
      >
      <AppBar className='rounded-lg' position="static">
      <Typography
              fontSize={20}
              className="rounded-t-lg"
              sx={{width: '100%', p: 2, display: "flex", selfCenter: "start" }}
            >
              CONSULTAS A REAGENDAR
            </Typography>
        <Tabs
        className='rounded-lg px-2'
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="appoints tabs"
        >
          <Tab label="CANCELADAS" {...a11yProps(0)} />
          <Tab label="ALERTAS DE RETORNO" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
      <FormCanceled />
      </TabPanel>
      
      <TabPanel value={value} index={1} dir={theme.direction}>
        <FormReturns />
      </TabPanel>
    </Box>
  );
}

export {FormAppointsTab}