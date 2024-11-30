import Grid from "@mui/material/Grid2";
import { FormPacients } from "./components/FormPacients/FormPacients";
import { TabFormAccount } from "./components/Tabs/FormAccount/TabFormAccount";
import { FormAppointsTab } from "./components/Tabs/FormReAppoints/TabFormReAppoints";
import { FormAppointsConfirm } from "./components/FormAppointsOn/FormAppointsConfirms";

const TabContentTask = () => {
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
        {/**** CONSULTAS ****/}
        <Grid
          container
          spacing={4}
          sx={{ 
            display: "flex", alignItems: "start" }}
          size={{ xs: 12, md: 7}}
        >
          <FormAppointsConfirm />
          <FormAppointsTab />
        </Grid>
        {/**** ACCOUNTS, PACIENTS ****/}
        <Grid
          direction="column"
          container
          spacing={2}
          sx={{display: "flex", flexDirection: 'column'}}
          size={{ xs: 12, md: 4, sm: 10 }}
        >
          <TabFormAccount />
          <FormPacients />
        </Grid>

      </Grid>
    );
  };

  export {TabContentTask}