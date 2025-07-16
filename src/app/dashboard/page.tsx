import DashboardStats from "../../component/dashboard-stats";
import MostBorrowedBooks from "../../component/most-borrowed-books";
import MonthlyLendingTrends from "../../component/monthly-lending-trends";
import BooksByCategory from "../../component/books-by-category";
import RecentActivities from "../../component/recent-activities";
import Sidebar from "@/component/sidebar";
import Header from "@/component/header";

export default function DashboardPage() {
  return (
    <div className="">
      <div className="flex justify-end items-center h-[50px] px-4 md:px-8">
        <Header />
      </div>
      <div className="flex space-y-6 px-4 pb-4 md:px-8 md:pb-8  h-[100vh]">
        <div>
          <Sidebar />
        </div>
        <div>
          <div className="flex-1 p-6 bg-gray-100  overflow-auto">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Dashboard Perpustakaan
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}
                </span>
              </div>
            </div>

            {/* Stats Cards */}
            <DashboardStats />

            {/* Charts Grid - Fixed Layout */}
            <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 pt-4">
              {/* Monthly Trends - Takes 2 columns */}
              <div className="xl:col-span-2">
                <div className="h-full">
                  <MonthlyLendingTrends />
                </div>
              </div>

              {/* Recent Activities - Takes 1 column */}
              <div className="xl:col-span-1  pt-4">
                <div className="h-full">
                  <RecentActivities />
                </div>
              </div>
            </div>

            {/* Bottom Charts Grid */}
            <div className="grid gap-6 grid-cols-1 xl:grid-cols-2  pt-4">
              {/* Most Borrowed Books */}
              <div>
                <MostBorrowedBooks />
              </div>

              {/* Books by Category */}
              <div>
                <BooksByCategory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
