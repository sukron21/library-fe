import DashboardStats from "../../component/dashboard-stats";
import MostBorrowedBooks from "../../component/most-borrowed-books";
import MonthlyLendingTrends from "../../component/monthly-lending-trends";
import BooksByCategory from "../../component/books-by-category";
import RecentActivities from "../../component/recent-activities";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
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
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
        {/* Monthly Trends - Takes 2 columns */}
        <div className="xl:col-span-2">
          <div className="h-full">
            <MonthlyLendingTrends />
          </div>
        </div>

        {/* Recent Activities - Takes 1 column */}
        <div className="xl:col-span-1">
          <div className="h-full">
            <RecentActivities />
          </div>
        </div>
      </div>

      {/* Bottom Charts Grid */}
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
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
  );
}
