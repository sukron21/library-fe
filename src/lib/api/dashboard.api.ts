import { BookCategoryDistributionResponse, DashboardSummaryResponse, MonthlyBorrowingTrendResponse, MostBorrowedBooksResponse, RecentActivityResponse } from "../types/dashboard";
import api from "./api.config";

export const Summary = async (): Promise<DashboardSummaryResponse> => {
  const res = await api.get<DashboardSummaryResponse>("/protected/dashboard/summary");
  return res.data;
};

export const LatesActivity = async (): Promise<RecentActivityResponse> => {
  const res = await api.get<RecentActivityResponse>("/protected/dashboard/latest-activity");
  return res.data;
};

export const TopBorrowed = async (): Promise<MostBorrowedBooksResponse> => {
  const res = await api.get<MostBorrowedBooksResponse>("/protected/dashboard/top-borrowed-books");
  return res.data;
};

export const MonthlyTrend = async (): Promise<MonthlyBorrowingTrendResponse> => {
  const res = await api.get<MonthlyBorrowingTrendResponse>("/protected/dashboard/monthly-trend");
  return res.data;
};

export const CategoryDistribution = async (): Promise<BookCategoryDistributionResponse> => {
  const res = await api.get<BookCategoryDistributionResponse>("/protected/dashboard/categories-distribution");
  return res.data;
};