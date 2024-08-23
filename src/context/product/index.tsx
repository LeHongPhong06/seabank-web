"use client";
import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { InitialStateProduct, PayloadAction } from "./data";

const ProductContext = createContext<InitialStateProduct | null>(null);
const ProductDispatchContext = createContext<Dispatch<PayloadAction> | null>(null);

const productReducer = (productState: InitialStateProduct, action: PayloadAction) => {
  const { payload } = action;
  const data = { ...productState };
  switch (action.type) {
    case "changeModalBusiness":
      data.modalBusinessRegister = payload || false;
      return data;
    case "changeModalIndividual":
      data.modalIndividualRegister = payload || false;
      return data;
    case "changeModalSupport":
      data.modalCustomerSupport = payload || false;
      return data;
    default:
      return data;
  }
};
const ProviderProductContext = ({ children }: { children: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(productReducer, initialProduct);
  return (
    <ProductContext.Provider value={tasks}>
      <ProductDispatchContext.Provider value={dispatch}>{children}</ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
};

const initialProduct: InitialStateProduct = {
  modalBusinessRegister: false,
  modalCustomerSupport: false,
  modalIndividualRegister: false,
};
export default ProviderProductContext;
export const useProduct = () => useContext(ProductContext);
export const useProductDispatch = () => useContext(ProductDispatchContext);
