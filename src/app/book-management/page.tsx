"use client";
import { Button, notification, Table, Tooltip } from "antd";
import Sidebar from "@/component/sidebar";
import Header from "@/component/header";
import { Pencil, Trash2 } from "lucide-react";
import ModalAddBook from "@/component/modal-add-book";
import { useEffect, useState } from "react";
import { getAllBooks } from "@/lib/api/books.api";
import { Book } from "@/lib/types/book";

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

type NotificationType = "success" | "info" | "warning" | "error";

export default function ManagementBook() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (_text: number, _record: Book, index: number) => (
        <>{index + 1 + (currentPage - 1) * pageSize}</>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Isbn",
      dataIndex: "isbn",
      key: "isbn",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <>
          <div className="flex gap-3">
            <Tooltip title="Update data">
              <Pencil size={20} className="cursor-pointer text-blue-600" />
            </Tooltip>
            <Tooltip title="Delete data">
              <Trash2 size={20} className="cursor-pointer text-red-600" />
            </Tooltip>
          </div>
        </>
      ),
    },
  ];
  const openNotificationWithIcon = (
    type: NotificationType,
    title: string,
    descriptions: string
  ) => {
    api[type]({
      message: title,
      description: descriptions,
    });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    getDataTable();
  }, []);
  const getDataTable = async () => {
    try {
      setIsLoading(true);
      const response = await getAllBooks();
      setIsData(response?.data?.data);
      setIsLoading(false);
      console.log("response", response);
    } catch (error: any) {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {contextHolder}
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
                Add
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
            />
            ;
          </div>
        </div>
      </div>
      <ModalAddBook setIsModalOpen={setIsModalOpen} open={isModalOpen} />
    </div>
  );
}
