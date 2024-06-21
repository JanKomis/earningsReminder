import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  Area,
} from "recharts";

const processData = (data) => {
  const days = ["MON", "TUE", "WED", "THU", "FRI"];
  const processedData = days.map((day) => ({
    day,
    watchlist: 0,
    notWatchlist: 0,
  }));

  data.forEach((item) => {
    const eventDay = new Date(item.earningsDate).getDay();
    const dayIndex = (eventDay + 6) % 7;
    const isWatchlist = item.watchlist.watchlist;

    if (isWatchlist) {
      processedData[dayIndex].watchlist += 1;
    } else {
      processedData[dayIndex].notWatchlist += 1;
    }
  });

  return processedData;
};

export default function CustomBarChart({ data }) {
  const chartData = processData(data);

  return (
    <ResponsiveContainer width="100%" height="100%" className="p-0">
      <BarChart
        width={600}
        height={400}
        data={chartData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={[0, 4]} tickCount={5} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="watchlist"
          stackId="a"
          fill="var(--color-watchlist)"
          name="Watchlist"
        />
        <Bar
          dataKey="notWatchlist"
          stackId="a"
          fill="var(--color-nonWatchlist)"
          name="Others"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
