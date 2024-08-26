"use client";
import { ReactNode, createContext, useReducer } from "react";

type PayloadType = {
  subGroupProduct?: Array<any>;
  subGroupProductSlug?: string;
  productCompare?: any;
  productList?: Array<any>;
  productParameters?: string;
  modalBusinessRegister?: boolean;
  modalIndividualRegister?: boolean;
  modalCustomerSupport?: boolean;
};

type AppState = {
  subGroupProduct: Array<any>;
  productList: Array<any>;
  productListCompares: Array<any>;
  productParameters: string;
  subGroupProductSlug?: string;
  modalBusinessRegister?: boolean;
  modalIndividualRegister?: boolean;
  modalCustomerSupport?: boolean;
};

type ActionType = {
  type: string;
  payload: PayloadType;
};

type AppProviderProps = {
  children: ReactNode;
};

type ProductContextProps = {
  state: AppState;
  dispatch: React.Dispatch<ActionType>;
};

const initialState = {
  subGroupProduct: [],
  productList: [],
  productListCompares: [],
  productParameters: "",
  subGroupProductSlug: "",
  modalBusinessRegister: false,
  modalIndividualRegister: false,
  modalCustomerSupport: false,
};

export const ProductContext = createContext<ProductContextProps>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: AppState, action: ActionType) {
  switch (action.type) {
    case "setSubGroupProduct":
      return {
        ...state,
        subGroupProduct: action.payload?.subGroupProduct || [],
        productList: action.payload.productList || [],
      };

    case "setSubGroupProductSlug":
      return {
        ...state,
        subGroupProductSlug: action.payload?.subGroupProductSlug,
      };
    case "changeModalBusiness":
      return {
        ...state,
        modalBusinessRegister: action.payload?.modalBusinessRegister,
      };
    case "changeModalIndividual":
      return {
        ...state,
        modalIndividualRegister: action.payload?.modalIndividualRegister,
      };
    case "changeModalSupport":
      return {
        ...state,
        modalCustomerSupport: action.payload?.modalCustomerSupport,
      };
    case "changeProductCompare":
      const products = [...state.productListCompares];
      const index = products.findIndex((item) => item?.id === action.payload.productCompare?.id);
      if (index !== -1) {
        products.splice(index, 1);
      } else {
        products.push(action.payload.productCompare);
      }
      return {
        ...state,
        productListCompares: products,
      };
    case "clearProductCompares":
      return {
        ...state,
        productListCompares: [],
      };
    default:
      throw new Error();
  }
}

function ProductProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
}

export default ProductProvider;
