"use client";
import { useProduct, useProductDispatch } from "@/context/product";
import { getBreakpointCurrent } from "@/hooks/breakpoint";
import { GetProps, Modal, ModalProps } from "antd";
import _ from "lodash";
import React from "react";
import FormBusinessRegister from "../forms/FormBusinessRegister";
import FormIndividualRegister from "../forms/FormIndividualRegister";
import FormSupport from "../forms/FormSupport";

type ModalWapperProps = {
  modalProps?: GetProps<typeof Modal>;
  children: React.ReactNode;
};

const ProductModal = () => {
  const product = useProduct();
  const productDispatch = useProductDispatch();
  return (
    <React.Fragment>
      <ModalWapper
        modalProps={{
          open: product?.modalIndividualRegister,
          onCancel: () => productDispatch?.({ type: "changeModalIndividual", payload: false }),
        }}
      >
        <FormIndividualRegister />
      </ModalWapper>
      <ModalWapper
        modalProps={{
          open: product?.modalBusinessRegister,
          onCancel: () => productDispatch?.({ type: "changeModalBusiness", payload: false }),
        }}
      >
        <FormBusinessRegister />
      </ModalWapper>
      <ModalWapper
        modalProps={{
          open: product?.modalCustomerSupport,
          onCancel: () => productDispatch?.({ type: "changeModalSupport", payload: false }),
        }}
      >
        <FormSupport />
      </ModalWapper>
    </React.Fragment>
  );
};

const ModalWapper: React.FC<ModalWapperProps> = ({ modalProps, children }) => {
  const isMobile = _.includes(["xs", "sm"], getBreakpointCurrent());
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
