"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardSummary } from "@/lib/types/dashboard";
import { BookOpen, Users, TrendingUp, Calendar } from "lucide-react";
interface stats {
  data: DashboardSummary;
}
export default function DashboardStats({ data }: stats) {
  const stats = [
    {
      title: "Total Buku",
      value: data?.total_books,
      icon: BookOpen,
    },
    {
      title: "Anggota Aktif",
      value: data?.total_members,
      icon: Users,
    },
    {
      title: "Peminjaman Bulan Ini",
      value: data?.borrowings_this_month,
      icon: TrendingUp,
    },
    {
      title: "Rata-rata Harian",
      value: data?.avg_daily_borrowings,
      icon: Calendar,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats?.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat?.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat?.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
