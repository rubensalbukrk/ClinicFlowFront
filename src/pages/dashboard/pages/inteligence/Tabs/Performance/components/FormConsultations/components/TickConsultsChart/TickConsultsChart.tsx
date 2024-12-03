import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const dataset = [
  {
    count: 5,
    month: "Jan",
  },
  {
    count: 8,
    month: "Feb",
  },
  {
    count: 4,
    month: "Mar",
  },
  {
    count: 10,
    month: "Apr",
  },
  {
    count: 19,
    month: "May",
  },
  {
    count: 13,
    month: "June",
  },
  {
    count: 2,
    month: "July",
  },
  {
    count: 9,
    month: "Aug",
  },
  {
    count: 4,
    month: "Sept",
  },
  {
    count: 12,
    month: "Oct",
  },
  {
    count: 20,
    month: "Nov",
  },
  {
    count: 33,
    month: "Dec",
  },
];

function valueFormatter(value: number | null) {
  return `${value} pacientes`;
}

const TickConsultChart = () => {
  return (
    <Box className="w-full h-[340px]">
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[{ dataKey: "count", label: "Pacientes", valueFormatter }]}
        layout="horizontal"
      />
    </Box>
  );
};

export { TickConsultChart };
