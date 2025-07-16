"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
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

const data = [
  {
    title: "Pemrograman Web",
    borrowed: 145,
  },
  {
    title: "Database Design",
    borrowed: 132,
  },
  {
    title: "Algoritma & Struktur Data",
    borrowed: 128,
  },
  {
    title: "Machine Learning",
    borrowed: 115,
  },
  {
    title: "Jaringan Komputer",
    borrowed: 98,
  },
  {
    title: "Sistem Operasi",
    borrowed: 87,
  },
  {
    title: "Keamanan Siber",
    borrowed: 76,
  },
];

export default function MostBorrowedBooks() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>Buku Paling Banyak Dipinjam</CardTitle>
        <CardDescription>
          Top 7 buku dengan peminjaman tertinggi bulan ini
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{
            borrowed: {
              label: "Jumlah Peminjaman",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
            >
              <XAxis
                dataKey="title"
                tick={{ fontSize: 10 }}
                angle={-35}
                textAnchor="end"
                height={120}
                interval={0}
              />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="borrowed" fill="#6477DB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
