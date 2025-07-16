import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Modal, Tag } from "antd";
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
  onSubmit: (values: any) => void;
  type?: string;
}

const ModalConfirmation: React.FC<AddBook> = ({
  setIsModalOpen,
  open,
  onSubmit,
}: AddBook) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Delete Book"
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        onOk={onSubmit}
        onCancel={handleCancel}
      >
        Are you sure you want to delete this data?
      </Modal>
    </>
  );
};

export default ModalConfirmation;
