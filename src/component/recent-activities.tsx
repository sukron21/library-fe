"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { RecentActivity } from "@/lib/types/dashboard";

const activities = [
  {
    id: 1,
    user: "Ahmad Rizki",
    action: "meminjam",
    book: "Pemrograman Web dengan React",
    time: "2 menit yang lalu",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "borrowed",
  },
  {
    id: 2,
    user: "Siti Nurhaliza",
    action: "mengembalikan",
    book: "Database Design Fundamentals",
    time: "15 menit yang lalu",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "returned",
  },
  {
    id: 3,
    user: "Budi Santoso",
    action: "meminjam",
    book: "Machine Learning Basics",
    time: "1 jam yang lalu",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "borrowed",
  },
  {
    id: 4,
    user: "Maya Sari",
    action: "mengembalikan",
    book: "Algoritma dan Struktur Data",
    time: "2 jam yang lalu",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "returned",
  },
  {
    id: 5,
    user: "Dedi Kurniawan",
    action: "meminjam",
    book: "Jaringan Komputer",
    time: "3 jam yang lalu",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "borrowed",
  },
  {
    id: 6,
    user: "Rina Sari",
    action: "mengembalikan",
    book: "Sistem Operasi",
    time: "4 jam yang lalu",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "returned",
  },
];

interface recent {
  data: RecentActivity[];
}
export default function RecentActivities({ data }: recent) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>Aktivitas Terbaru</CardTitle>
        <CardDescription>
          Peminjaman dan pengembalian buku terbaru
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="h-[300px] overflow-y-auto space-y-4 pr-2">
          {data?.map((activity, i: number) => (
            <div key={i} className="flex items-center space-x-4">
              <Avatar className="h-9 w-9 flex-shrink-0">
                <AvatarImage
                  // src={activity?.avatar || "/placeholder.svg"}
                  alt={activity?.user_name}
                />
                <AvatarFallback>
                  {activity?.user_name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1 min-w-0">
                <p className="text-sm font-medium leading-none">
                  <span className="truncate block">
                    {activity?.user_name} {activity?.type}
                  </span>
                  <span className="font-normal text-muted-foreground truncate block">
                    "{activity?.book_title}"
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity?.date}
                </p>
              </div>
              <Badge
                variant={activity?.type === "borrow" ? "default" : "secondary"}
                className="flex-shrink-0"
              >
                {activity?.type === "borrow" ? "Dipinjam" : "Dikembalikan"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
