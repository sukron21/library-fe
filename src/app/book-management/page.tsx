"use client";
import { Button, Table, Tooltip } from "antd";
import Sidebar from "@/component/sidebar";
import Header from "@/component/header";
import { Pencil, Trash2 } from "lucide-react";
import ModalAddBook from "@/component/modal-add-book";
import { useState } from "react";

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

const columns = [
  {
    title: "No",
    dataIndex: "key",
    key: "key",
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

export default function ManagementBook() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
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
                Add
              </Button>
            </div>
            <Table dataSource={dataSource} columns={columns} bordered />;
          </div>
        </div>
      </div>
      <ModalAddBook setIsModalOpen={setIsModalOpen} open={isModalOpen} />
    </div>
  );
}
