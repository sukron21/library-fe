export interface DashboardSummary {
  total_books: number;
  total_members: number;
  borrowings_this_month: number;
  avg_daily_borrowings: number;
}

export interface DashboardSummaryResponse {
  success: boolean;
  message: string;
  data: DashboardSummary;
}

export interface RecentActivity {
  type: "borrow" | "return"; // atau string jika tipenya bisa lebih banyak
  user_name: string;
  book_title: string;
  date: string; // ISO format date
}

export interface RecentActivityResponse {
  success: boolean;
  message: string;
  data: RecentActivity[];
}

export interface MostBorrowedBook {
  title: string;
  borrow_count: number;
}

export interface MostBorrowedBooksResponse {
  code: number;
  success: boolean;
  message: string;
  data: MostBorrowedBook[];
}

export interface MonthlyBorrowingTrend {
  month: string;      // "Jan", "Feb", dst.
  month_num: number;  // 1 - 12
  borrowings: number;
  returns: number;
}

export interface MonthlyBorrowingTrendResponse {
  code: number;
  success: boolean;
  message: string;
  data: MonthlyBorrowingTrend[];
}

export interface BookCategoryDistribution {
  category: string;
  book_count: number;
  color?:string
}

export interface BookCategoryDistributionResponse {
  code: number;
  success: boolean;
  message: string;
  data: BookCategoryDistribution[];
}