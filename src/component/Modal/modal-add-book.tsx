import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Modal, Tag } from "antd";

type RequiredMark = boolean | "optional" | "customize";

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean }
) => (
  <>
    {required ? (
      <Tag color="error">Required</Tag>
    ) : (
      <Tag color="warning">optional</Tag>
    )}
    {label}
  </>
);

interface AddBook {
  setIsModalOpen: (open: boolean) => void;
  open: boolean;
  form: any;
  onSubmit: (values: any) => void;
  type?: string;
}

const ModalAddBook: React.FC<AddBook> = ({
  setIsModalOpen,
  open,
  form,
  onSubmit,
}: AddBook) => {
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Add Book"
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        footer
        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          onFinish={onSubmit}
          //   requiredMark={
          //     requiredMark === "customize" ? customizeRequiredMark : requiredMark
          //   }
        >
          <Form.Item
            name="title"
            label="Title"
            required
            // tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            name="author"
            label="Author"
            required
            // tooltip={{ title: "Tooltip with customize icon", icon: <Info /> }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            name="isbn"
            label="Isbn"
            required
            // tooltip={{ title: "Tooltip with customize icon", icon: <Info /> }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            required
            // tooltip={{ title: "Tooltip with customize icon", icon: <Info /> }}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="input placeholder"
            />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            required
            // tooltip={{ title: "Tooltip with customize icon", icon: <Info /> }}
          >
            <Input placeholder="input placeholder" />
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

export default ModalAddBook;
