import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormReceive } from './Tabs/FormReceive/FormReceive';

function TabPanel(props: any) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  dir: undefined
};

function a11yProps(index: unknown) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function AccountTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderRadius: 1,
     bgcolor: 'background.paper', 
     width: '100%',
     minWidth: 300
     }}
     >
      <AppBar className='rounded-lg' sx={{opacity: 1}} position="static">
      <Typography
              fontSize={20}
              className="rounded-t-lg"
              sx={{width: '100%', p: 2, display: "flex", selfCenter: "start" }}
            >
              CONTAS
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
          <Tab label="A RECEBER" sx={{width: 'auto'}} {...a11yProps(0)} />
          <Tab label="A PAGAR" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <FormReceive />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        A PAGAR
      </TabPanel>
    </Box>
  );
}

export {AccountTab}