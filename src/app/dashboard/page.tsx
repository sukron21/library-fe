"use client";
import DashboardStats from "../../component/dashboard-stats";
import MostBorrowedBooks from "../../component/most-borrowed-books";
import MonthlyLendingTrends from "../../component/monthly-lending-trends";
import BooksByCategory from "../../component/books-by-category";
import RecentActivities from "../../component/recent-activities";
import Sidebar from "@/component/sidebar";
import Header from "@/component/header";
import React, { useEffect, useState } from "react";
import {
  CategoryDistribution,
  LatesActivity,
  MonthlyTrend,
  Summary,
  TopBorrowed,
} from "@/lib/api/dashboard.api";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  return (
    "#" +
    Array.from({ length: 6 })
      .map(() => letters[Math.floor(Math.random() * 16)])
      .join("")
  );
};

export default function DashboardPage() {
  const [isSummary, setSummary] = useState<any>();
  const [isLastActivity, setLatesActivity] = useState<any>();
  const [isTopBorrowed, setTopBorrowed] = useState<any>();
  const [isMonthlyTrend, setMonthlyTrend] = useState<any>();
  const [isCategoryDistribution, setCategoryDistribution] = useState<any>();
  useEffect(() => {
    getSummary();
    getLatesActivity();
    getTopBorrowed();
    getMonthlyTrend();
    getCategoryDistribution();
  }, []);

  const getSummary = async () => {
    try {
      const response = await Summary();
      setSummary(response.data);
    } catch (error: any) {
      console.log();
    }
  };
  const getLatesActivity = async () => {
    try {
      const response = await LatesActivity();
      setLatesActivity(response.data);
    } catch (error: any) {
      console.log();
    }
  };
  const getTopBorrowed = async () => {
    try {
      const response = await TopBorrowed();
      setTopBorrowed(response.data);
    } catch (error: any) {
      console.log();
    }
  };
  const getMonthlyTrend = async () => {
    try {
      const response = await MonthlyTrend();
      setMonthlyTrend(response.data);
    } catch (error: any) {
      console.log();
    }
  };
  const getCategoryDistribution = async () => {
    try {
      const response = await CategoryDistribution();
      const datas = response.data.map((item: any) => ({
        ...item,
        name: item.category,
        color: getRandomColor(),
      }));
      setCategoryDistribution(datas);
    } catch (error: any) {
      console.log();
    }
  };
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
            <DashboardStats data={isSummary} />

            {/* Charts Grid - Fixed Layout */}
            <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 pt-4">
              {/* Monthly Trends - Takes 2 columns */}
              <div className="xl:col-span-2">
                <div className="h-full">
                  <MonthlyLendingTrends data={isMonthlyTrend} />
                </div>
              </div>

              {/* Recent Activities - Takes 1 column */}
              <div className="xl:col-span-1  pt-4">
                <div className="h-full">
                  <RecentActivities data={isLastActivity} />
                </div>
              </div>
            </div>

            {/* Bottom Charts Grid */}
            <div className="grid gap-6 grid-cols-1 xl:grid-cols-2  pt-4">
              {/* Most Borrowed Books */}
              <div>
                <MostBorrowedBooks datas={isTopBorrowed} />
              </div>

              {/* Books by Category */}
              <div>
                <BooksByCategory data={isCategoryDistribution} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
