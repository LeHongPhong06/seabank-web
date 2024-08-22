"use client";
import { useBreakpointScreen } from "@/hooks/breakpoint";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setChangeOpenModalBusinessRegister,
  setChangeOpenModalInvidualRegister,
  setChangeOpenModalSupport,
} from "@/stores/slices/product";
import { GetProps, Modal, ModalProps } from "antd";
import React from "react";
import FormBusinessRegister from "../forms/FormBusinessRegister";
import FormIndividualRegister from "../forms/FormIndividualRegister";
import FormSupport from "../forms/FormSupport";

type ModalWapperProps = {
  modalProps?: GetProps<typeof Modal>;
  children: React.ReactNode;
};

const ProductModal = () => {
  const dispatch = useAppDispatch();
  const { modalInvidualRegister, modalBusinessRegister, modalSupport } = useAppSelector((state) => state.product);
  return (
    <React.Fragment>
      <ModalWapper
        modalProps={{
          open: modalInvidualRegister,
          onCancel: () => dispatch(setChangeOpenModalInvidualRegister(false)),
        }}
      >
        <FormIndividualRegister />
      </ModalWapper>
      <ModalWapper
        modalProps={{
          open: modalBusinessRegister,
          onCancel: () => dispatch(setChangeOpenModalBusinessRegister(false)),
        }}
      >
        <FormBusinessRegister />
      </ModalWapper>
      <ModalWapper modalProps={{ open: modalSupport, onCancel: () => dispatch(setChangeOpenModalSupport(false)) }}>
        <FormSupport />
      </ModalWapper>
    </React.Fragment>
  );
};

const ModalWapper: React.FC<ModalWapperProps> = ({ modalProps, children }) => {
  const [isMobile] = useBreakpointScreen();
  const modalStyles: ModalProps["styles"] = {
    header: { display: "none" },
    content: {
      borderRadius: isMobile ? 12 : 24,
      padding: 0,
    },
  };
  return (
    <Modal footer={null} destroyOnClose closable={false} width={"80%"} styles={modalStyles} {...modalProps}>
      {children}
    </Modal>
  );
};
export default ProductModal;
