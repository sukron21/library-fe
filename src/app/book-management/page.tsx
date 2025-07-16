"use client";
import { Button, Form, notification, Table, Tooltip } from "antd";
import Sidebar from "@/component/sidebar";
import Header from "@/component/header";
import { Pencil, Trash2 } from "lucide-react";
import ModalAddBook from "@/component/modal-add-book";
import { useEffect, useState } from "react";
import {
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
} from "@/lib/api/books.api";
import { Book } from "@/lib/types/book";
import ModalConfirmation from "@/component/modal-confirmation";

type NotificationType = "success" | "info" | "warning" | "error";

export default function ManagementBook() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState<any>([]);
  const [isTotalData, setIsTotalData] = useState<any>();
  const [isID, setIsID] = useState<string>("");
  const [isType, setIsType] = useState<string>("");
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
      dataIndex: "id",
      key: "id",
      render: (text: string, record: Book) => (
        <>
          <div className="flex gap-3">
            <Tooltip title="Update data">
              <Pencil
                size={20}
                className="cursor-pointer text-blue-600"
                onClick={() => {
                  showModalUpdate(record);
                }}
              />
            </Tooltip>
            <Tooltip title="Delete data">
              <Trash2
                size={20}
                className="cursor-pointer text-red-600"
                onClick={() => {
                  setIsModalDelete(true);
                  setIsID(text);
                }}
              />
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
  const showModalUpdate = (data: Book) => {
    setIsID(data.id);
    form.setFieldsValue(data); // isi form dengan data
    setIsType("update");
    setIsModalOpen(true);
  };

  const showModal = () => {
    form.resetFields();
    setIsModalOpen(true);
  };
  useEffect(() => {
    getDataTable();
  }, []);

  const getDataTable = async () => {
    try {
      setIsLoading(true);
      const response = await getAllBooks(currentPage, pageSize);
      console.log("response", response);

      setIsTotalData(response?.data.total_items);
      setIsData(response?.data?.data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  const handleSubmitBook = async (values: Book) => {
    try {
      const payload = {
        ...values,
        quantity: values.quantity.toString(), // konversi
      };
      await createBook(payload);

      openNotificationWithIcon(
        "success",
        "Add Book",
        "Books retrieved successfully"
      );
      getDataTable();
      setIsModalOpen(false);
    } catch (error: any) {
      openNotificationWithIcon("error", "Add Book", error.message);
    }
  };

  const handleUpateBook = async (values: Book) => {
    try {
      const payload = {
        ...values,
        quantity: values.quantity.toString(), // konversi
      };
      await updateBook(isID, payload);

      openNotificationWithIcon(
        "success",
        "Update Book",
        "Books retrieved successfully"
      );
      getDataTable();
      setIsModalOpen(false);
      setIsID("");
    } catch (error: any) {
      openNotificationWithIcon("error", "Add Book", error.message);
    }
  };

  const handleDeleteBook = async () => {
    try {
      await deleteBook(isID);

      openNotificationWithIcon(
        "success",
        "Delete Book",
        "deleteBooks successfully "
      );
      getDataTable();
      setIsModalDelete(false);
    } catch (error: any) {
      setIsModalDelete(false);
      openNotificationWithIcon("error", "Add Book", error.message);
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
              <Button
                type="primary"
                onClick={() => {
                  showModal();
                  setIsType("add");
                }}
              >
                Add
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
            />
            ;
          </div>
        </div>
      </div>
      <ModalAddBook
        form={form}
        setIsModalOpen={setIsModalOpen}
        open={isModalOpen}
        onSubmit={isType == "add" ? handleSubmitBook : handleUpateBook}
      />
      <ModalConfirmation
        open={isModalDelete}
        setIsModalOpen={setIsModalDelete}
        onSubmit={handleDeleteBook}
      />
    </div>
  );
}
