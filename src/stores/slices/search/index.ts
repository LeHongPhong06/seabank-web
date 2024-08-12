import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateSearch } from "./data";
const initialState: InitialStateSearch = {
  drawerSearch: false,
  modalSearch: false,
  keywords: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setOpenChangeModalSearch(state, action: PayloadAction<boolean>) {
      state.modalSearch = action.payload;
    },
    setOpenChangeDrawerSearch(state, action: PayloadAction<boolean>) {
      state.drawerSearch = action.payload;
    },
    setChangeKeywordSearch(state, action: PayloadAction<string>) {
      state.keywords = action.payload;
    },
  },
});

const { actions, reducer } = searchSlice;
export const { setOpenChangeModalSearch, setOpenChangeDrawerSearch, setChangeKeywordSearch } = actions;
export default reducer;
