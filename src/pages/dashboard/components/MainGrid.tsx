import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Details3View from './Details3View';
import Typography from '@mui/material/Typography';
import PageViewsBarChart from './PageViewsBarChart';
import StatCard from './StatCard'

import Copyright from '../internals/components/Copyright';

const data: StatCardProps[] = [
  {
    title: 'Usuários',
    value: '515',
    interval: 'últimos 30 dias',
    trend: 'up',
    data: [
      10, 24, 80, 90, 100, 200, 220, 240, 250, 260, 270, 280, 290, 310, 320, 330,
      360, 370, 380, 400, 400, 400, 340, 460, 440, 480, 460, 480, 490, 515,
    ],
  },
  {
    title: 'Agendamentos',
    value: '15',
    interval: 'Últimos 30 dias',
    trend: 'up',
    data: [
      100, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'Faturamento',
    value: 'R$ 7.240',
    interval: 'Últimos 30 dias ',
    trend: 'up',
    data: [
      100, 200, 10, 330, 100, 600, 300, 420, 210, 630, 520, 510, 530, 620, 210, 130,
      420, 110, 630, 120, 110, 530, 120, 110, 630, 520, 100, 100, 620, 620,
    ],
  },
  {
    title: 'Pendentes',
    value: 'R$ 2.342',
    interval: '.',
    trend: 'neutral',
    data: [
      100, 200, 310, 420, 420, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        VISÃO GERAL
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}

        <Grid size={{ xs: 12, md: 6 }}>
         <Details3View />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>


   
      <Grid container spacing={2} columns={12}>

      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
