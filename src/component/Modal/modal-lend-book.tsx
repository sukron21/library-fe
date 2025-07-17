import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { Book } from "@/lib/types/book";

interface lendBook {
  setIsModalOpen: (open: boolean) => void;
  open: boolean;
  onSubmit: (values: any) => void;
  dataBook: Book[];
  form: any;
}

type RequiredMark = boolean | "optional" | "customize";

const ModalLendBook: React.FC<lendBook> = ({
  form,
  setIsModalOpen,
  open,
  dataBook,
  onSubmit,
}: lendBook) => {
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const bookOptions = dataBook?.map((book) => ({
    value: book.id,
    label: book.title,
  }));

  return (
    <>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        footer
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          onFinish={onSubmit}
        >
          <Form.Item name="Book_id" label="Book" required>
            <Select
              showSearch
              placeholder="Select a person"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={bookOptions}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalLendBook;
