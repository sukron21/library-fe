"use client";
import { Button, Form, notification, Table, Tooltip } from "antd";
import Sidebar from "@/component/sidebar";
import Header from "@/component/header";
import { BookCheck, Trash2 } from "lucide-react";
import ModalLendBook from "@/component/Modal/modal-lend-book";
import { useEffect, useState } from "react";
import {
  createBorrow,
  deleteBorrow,
  getAllBorrow,
  updateBorrow,
} from "@/lib/api/borrow.api";
import { createsBorrow } from "@/lib/types/borrow";
import { getBookAll } from "@/lib/api/books.api";
import ModalConfirmation from "@/component/Modal/modal-confirmation";

type NotificationType = "success" | "info" | "warning" | "error";
export default function ManagementLend() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState<any>([]);
  const [isDataModal, setIsDataModal] = useState<any>([]);
  const [isTotalData, setIsTotalData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [api, contextHolder] = notification.useNotification();
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isID, setIsID] = useState<string>("");
  const [isType, setIsType] = useState<string>("");

  const pageSize = 10;
  const showModal = async () => {
    await getDataBook();
    setIsModalOpen(true);
  };
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
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <>
          <div className="flex gap-3">
            <Tooltip title="Return Book">
              <BookCheck
                size={20}
                className="cursor-pointer text-blue-600"
                onClick={() => {
                  setIsModalDelete(true);
                  setIsID(text);
                  setIsType("return");
                }}
              />
            </Tooltip>
            <Tooltip title="Delete Data">
              <Trash2
                size={20}
                className="cursor-pointer text-red-600"
                onClick={() => {
                  setIsModalDelete(true);
                  setIsID(text);
                  setIsType("delete");
                }}
              />
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
      const response = await getAllBorrow(currentPage, pageSize);
      setIsData(response?.data?.data);
      setIsLoading(false);
      setIsTotalData(response?.data.total_items);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  const handleSubmitBorrow = async (values: createsBorrow) => {
    try {
      const payload = {
        ...values,
        borrow_date: new Date().toISOString(),
        // quantity: values.quantity.toString(), // konversi
      };
      await createBorrow(payload);

      openNotificationWithIcon(
        "success",
        "Add Lend",
        "Lend retrieved successfully"
      );
      getDataTable();
      setIsModalOpen(false);
    } catch (error: any) {
      openNotificationWithIcon("error", "Add Lend", error.message);
    }
  };

  const getDataBook = async () => {
    try {
      setIsLoading(true);
      const response = await getBookAll();
      setIsDataModal(response?.data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  const handleDeleteBook = async () => {
    try {
      await deleteBorrow(isID);

      openNotificationWithIcon(
        "success",
        "Delete data",
        "delete data successfully "
      );
      getDataTable();
      setIsModalDelete(false);
    } catch (error: any) {
      setIsModalDelete(false);
      openNotificationWithIcon("error", "Delete data", error.message);
    }
  };
  const handleReturnBook = async () => {
    try {
      const payload = {
        ReturnDate: new Date().toISOString(),
        // quantity: values.quantity.toString(), // konversi
      };
      await updateBorrow(isID, payload);

      openNotificationWithIcon(
        "success",
        "Return Lend",
        "Return Lend  successfully"
      );
      getDataTable();
      setIsModalDelete(false);
    } catch (error: any) {
      openNotificationWithIcon("error", "Return Lend", error.message);
      setIsModalDelete(false);
    }
  };
  return (
    <div className="">
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
                Borrow
              </Button>
            </div>
            <Table
              loading={isLoading}
              dataSource={isData}
              columns={columns}
              pagination={{
                total: isTotalData,
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
      <ModalLendBook
        setIsModalOpen={setIsModalOpen}
        open={isModalOpen}
        onSubmit={handleSubmitBorrow}
        dataBook={isDataModal}
        form={form}
      />
      <ModalConfirmation
        open={isModalDelete}
        setIsModalOpen={setIsModalDelete}
        onSubmit={isType == "delete" ? handleDeleteBook : handleReturnBook}
        type={isType}
      />
    </div>
  );
}
