import React from "react";
import { Modal, Tag } from "antd";

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
