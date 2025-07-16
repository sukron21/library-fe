"use client";
import { Button, Table, Tooltip } from "antd";
import Sidebar from "@/component/sidebar";
import Header from "@/component/header";
import { BookCheck, Pencil, Trash2 } from "lucide-react";
import ModalLendBook from "@/component/modal-lend-book";
import { useEffect, useState } from "react";
import { getAllBorrow } from "@/lib/api/borrow.api";

const dataSource = [
  {
    key: "1",
    title: "Mike",
    author: 32,
    isbn: "10 Downing Street",
    quantity: "10 Downing Street",
    category: "10 Downing Street",
  },
  {
    key: "2",
    title: "John",
    author: 42,
    isbn: "10 Downing Street",
    quantity: "10 Downing Street",
    category: "10 Downing Street",
  },
];

export default function ManagementLend() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (_text: number, _record: any, index: number) => (
        <>{index + 1 + (currentPage - 1) * pageSize}</>
      ),
    },
    {
      title: "Borrow Name",
      dataIndex: "name",
      key: "name",
      render: (_text: number, record: any, index: number) => (
        <>{record?.User?.name}</>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (_text: number, record: any, index: number) => (
        <>{record?.Book?.title}</>
      ),
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (_text: number, record: any, index: number) => (
        <>{record?.Book?.author}</>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (_text: number, record: any, index: number) => (
        <>{record?.Book?.category}</>
      ),
    },
    {
      title: "Borrow date",
      dataIndex: "borrow_date",
      key: "borrow_date",
    },
    {
      title: "Return date",
      dataIndex: "return_date",
      key: "return_date",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <>
          <div className="flex gap-3">
            <Tooltip title="Return Book">
              <BookCheck size={20} className="cursor-pointer text-blue-600" />
            </Tooltip>
            <Tooltip title="Delete Data">
              <Trash2 size={20} className="cursor-pointer text-red-600" />
            </Tooltip>
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    getDataTable();
  }, []);
  const getDataTable = async () => {
    try {
      setIsLoading(true);
      const response = await getAllBorrow();
      setIsData(response?.data?.data);
      setIsLoading(false);
      console.log("response", response);
    } catch (error: any) {
      setIsLoading(false);
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
        <div className="flex-1 p-6 bg-gray-100  overflow-auto">
          <div className="border bg-white h-full p-4">
            <div className="flex justify-end pb-8">
              <Button type="primary" onClick={showModal}>
                Borrow
              </Button>
            </div>
            <Table
              loading={isLoading}
              dataSource={isData}
              columns={columns}
              pagination={{
                current: currentPage,
                pageSize: pageSize,
                onChange: (page) => setCurrentPage(page),
              }}
              bordered
              scroll={{ x: "max-content" }}
            />
            ;
          </div>
        </div>
      </div>
      <ModalLendBook setIsModalOpen={setIsModalOpen} open={isModalOpen} />
    </div>
  );
}
