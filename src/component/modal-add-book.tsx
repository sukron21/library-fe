import React, { useState } from "react";
import { Button, Form, Input, Modal, Tag } from "antd";
import { Info } from "lucide-react";

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
}

const ModalAddBook: React.FC<AddBook> = ({ setIsModalOpen, open }: AddBook) => {
  const [form] = Form.useForm();
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
          //   requiredMark={
          //     requiredMark === "customize" ? customizeRequiredMark : requiredMark
          //   }
        >
          <Form.Item
            label="Title"
            required
            // tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Author"
            required
            // tooltip={{ title: "Tooltip with customize icon", icon: <Info /> }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Isbn"
            required
            // tooltip={{ title: "Tooltip with customize icon", icon: <Info /> }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Quantity"
            required
            // tooltip={{ title: "Tooltip with customize icon", icon: <Info /> }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Category"
            required
            // tooltip={{ title: "Tooltip with customize icon", icon: <Info /> }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalAddBook;
