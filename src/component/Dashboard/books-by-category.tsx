"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BookCategoryDistribution } from "@/lib/types/dashboard";

const data = [
  { name: "Teknologi Informasi", value: 2847, color: "#0088FE" },
  { name: "Sains & Matematika", value: 2156, color: "#00C49F" },
  { name: "Ekonomi & Bisnis", value: 1923, color: "#FFBB28" },
  { name: "Sastra & Bahasa", value: 1654, color: "#FF8042" },
  { name: "Sejarah & Sosial", value: 1432, color: "#8884D8" },
  { name: "Kesehatan", value: 1289, color: "#82CA9D" },
  { name: "Seni & Budaya", value: 987, color: "#FFC658" },
  { name: "Lainnya", value: 559, color: "#FF7C7C" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
interface category {
  data: BookCategoryDistribution[];
}
export default function BooksByCategory({ data }: category) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>Distribusi Buku per Kategori</CardTitle>
        <CardDescription>
          Pembagian koleksi buku berdasarkan kategori
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{
            book_count: {
              label: "Jumlah Buku",
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data ? data : []}
                cx="50%"
                cy="40%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="book_count"
              >
                {data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-lg">
                        <p className="font-medium">{data.name}</p>
                        <p className="text-sm text-gray-600">
                          {data.book_count.toLocaleString()} buku
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={80}
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value, entry) => (
                  <span style={{ color: entry.color, fontSize: "11px" }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
