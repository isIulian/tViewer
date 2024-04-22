import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import data from "@/data/data.json";

let resourcesOverview = data.report.overview;

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={resourcesOverview}>
        <XAxis
          dataKey='label'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey='value'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
