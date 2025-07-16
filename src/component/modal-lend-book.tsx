import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

interface lendBook {
  setIsModalOpen: (open: boolean) => void;
  open: boolean;
}

type RequiredMark = boolean | "optional" | "customize";

const ModalLendBook: React.FC<lendBook> = ({
  setIsModalOpen,
  open,
}: lendBook) => {
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
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        onOk={handleOk}
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
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalLendBook;
