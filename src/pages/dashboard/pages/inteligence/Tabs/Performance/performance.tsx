import Grid from '@mui/material/Grid2'
import { TabFormFatura } from './components/FormFatura/TabFormFatura';
import { FormFinance } from './components/FormFinance/FormFinance';
import { FormConsultations } from './components/FormConsultations/FormConsultations';

const TabContentPerformance = () => {
    return (
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, md: 7 }}>
         <TabFormFatura />
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
         <FormFinance />
        </Grid>

        <Grid className="w-full">
          <FormConsultations />
        </Grid>
      </Grid>
    );
  };

  export {TabContentPerformance}