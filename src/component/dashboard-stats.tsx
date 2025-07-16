"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Calendar } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Buku",
      value: "12,847",
      change: "+2.5%",
      changeType: "positive" as const,
      icon: BookOpen,
    },
    {
      title: "Anggota Aktif",
      value: "3,421",
      change: "+12.3%",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Peminjaman Bulan Ini",
      value: "1,892",
      change: "+8.7%",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
    {
      title: "Rata-rata Harian",
      value: "63",
      change: "-2.1%",
      changeType: "negative" as const,
      icon: Calendar,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={`text-xs ${
                stat.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {stat.change} dari bulan lalu
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
