"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MonthlyBorrowingTrend } from "@/lib/types/dashboard";

// const data = [
//   {
//     month: "Jan",
//     peminjaman: 1420,
//     pengembalian: 1380,
//   },
//   {
//     month: "Feb",
//     peminjaman: 1680,
//     pengembalian: 1640,
//   },
//   {
//     month: "Mar",
//     peminjaman: 1890,
//     pengembalian: 1720,
//   },
//   {
//     month: "Apr",
//     peminjaman: 2100,
//     pengembalian: 1950,
//   },
//   {
//     month: "May",
//     peminjaman: 1950,
//     pengembalian: 2080,
//   },
//   {
//     month: "Jun",
//     peminjaman: 2200,
//     pengembalian: 2150,
//   },
//   {
//     month: "Jul",
//     peminjaman: 2350,
//     pengembalian: 2200,
//   },
//   {
//     month: "Aug",
//     peminjaman: 2180,
//     pengembalian: 2280,
//   },
//   {
//     month: "Sep",
//     peminjaman: 2450,
//     pengembalian: 2300,
//   },
//   {
//     month: "Oct",
//     peminjaman: 2380,
//     pengembalian: 2420,
//   },
//   {
//     month: "Nov",
//     peminjaman: 2150,
//     pengembalian: 2250,
//   },
//   {
//     month: "Dec",
//     peminjaman: 1892,
//     pengembalian: 2100,
//   },
// ];
interface Trend {
  data: MonthlyBorrowingTrend[];
}
export default function MonthlyLendingTrends({ data }: Trend) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>Tren Peminjaman Bulanan</CardTitle>
        <CardDescription>
          Perbandingan peminjaman dan pengembalian buku sepanjang tahun
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{
            borrowings: {
              label: "Peminjaman",
              color: "green",
            },
            returns: {
              label: "Pengembalian",
              color: "red",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data ? data : []}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="borrowings"
                stroke="var(--color-borrowings)"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="returns"
                stroke="var(--color-returns)"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
