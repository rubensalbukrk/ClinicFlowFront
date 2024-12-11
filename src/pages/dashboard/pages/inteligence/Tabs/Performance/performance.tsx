import Grid from "@mui/material/Grid2";
import { TabFormFatura } from './components/FormFatura/TabFormFatura';
import { FormFinance } from './components/FormFinance/FormFinance';
import { FormConsultations } from './components/FormConsultations/FormConsultations';

const TabContentPerformance = () => {
    return (
      <Grid
      container
        spacing={3}
        columns={12}
        sx={{ width: '100%',
          mx: 0, 
          mb: (theme) => theme.spacing(2),
          justifyContent: 'center',
        }}
      >
        <Grid container size={{ xs: 12, md: 7 }}>
         <TabFormFatura />
        </Grid>

        <Grid container size={{ xs: 12, md: 5 }}>
         <FormFinance />
        </Grid>

        <Grid container size={{xs: 12, md: 12}} >
          <FormConsultations />
        </Grid>
      </Grid>
    );
  };

  export {TabContentPerformance}