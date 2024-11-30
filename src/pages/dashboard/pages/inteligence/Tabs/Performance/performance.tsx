import Grid from '@mui/material/Grid2'
import { TabFormFatura } from './components/FormFatura/TabFormFatura';

const TabContentPerformance = () => {
    return (
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
         <TabFormFatura />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
         
        </Grid>
      </Grid>
    );
  };

  export {TabContentPerformance}