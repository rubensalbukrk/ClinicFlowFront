import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TabPanelProps } from 'dashboard/types/TabPanels';
import { FormReceive } from './Tabs/FormReceive/FormReceive';
import { FormPayable } from './Tabs/FormPayable/FormPayable';
import { ContainerBase } from 'src/pages/dashboard/components/ContainerBase/ContainerBase';

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

function TabFormAccount() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <ContainerBase title='CONTAS'
     >
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
     
      <TabPanel value={value} index={0} dir={theme.direction}>
        <FormReceive />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <FormPayable />
      </TabPanel>
    </ContainerBase>
  );
}

export {TabFormAccount}