import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateProduct } from "./data";

const initialState: InitialStateProduct = {
  modalInvidualRegister: false,
  modalBusinessRegister: false,
  modalSupport: false,
};
const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    setChangeOpenModalInvidualRegister(state, action: PayloadAction<boolean>) {
      state.modalInvidualRegister = action.payload;
    },
    setChangeOpenModalBusinessRegister(state, action: PayloadAction<boolean>) {
      state.modalInvidualRegister = action.payload;
    },
    setChangeOpenModalSupport(state, action: PayloadAction<boolean>) {
      state.modalSupport = action.payload;
    },
  },
});

const { actions, reducer } = productSlice;
export default reducer;
export const { setChangeOpenModalInvidualRegister, setChangeOpenModalSupport, setChangeOpenModalBusinessRegister } =
  actions;
