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
  type = "delete",
}: AddBook) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={type == "delete" ? "Delete" : "Return"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        onOk={onSubmit}
        onCancel={handleCancel}
      >
        {type == "delete"
          ? "Are you sure you want to delete this data?"
          : "Apakah Anda yakin ingin melanjutkan proses pengembalian buku ini?"}
      </Modal>
    </>
  );
};

export default ModalConfirmation;
