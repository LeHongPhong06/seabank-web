"use client";
import { ProductContext } from "@/context/product";
import { useGetBreakpointCurrent } from "@/hooks/breakpoint";
import { GetProps, Modal, ModalProps } from "antd";
import _ from "lodash";
import React, { useContext } from "react";
import FormBusinessRegister from "../forms/FormBusinessRegister";
import FormIndividualRegister from "../forms/FormIndividualRegister";
import FormSupport from "../forms/FormSupport";

type ModalWapperProps = {
  modalProps?: GetProps<typeof Modal>;
  children: React.ReactNode;
};

const ProductModal = () => {
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  return (
    <React.Fragment>
      <ModalWapper
        modalProps={{
          open: state?.modalIndividualRegister,
          onCancel: () => dispatch?.({ type: "changeModalIndividual", payload: { modalIndividualRegister: false } }),
        }}
      >
        <FormIndividualRegister />
      </ModalWapper>
      <ModalWapper
        modalProps={{
          open: state?.modalBusinessRegister,
          onCancel: () => dispatch?.({ type: "changeModalBusiness", payload: { modalBusinessRegister: false } }),
        }}
      >
        <FormBusinessRegister />
      </ModalWapper>
      <ModalWapper
        modalProps={{
          open: state?.modalCustomerSupport,
          onCancel: () => dispatch?.({ type: "changeModalSupport", payload: { modalCustomerSupport: false } }),
        }}
      >
        <FormSupport />
      </ModalWapper>
    </React.Fragment>
  );
};

const ModalWapper: React.FC<ModalWapperProps> = ({ modalProps, children }) => {
  const isMobile = _.includes(["xs", "sm"], useGetBreakpointCurrent());
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
