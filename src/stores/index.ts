import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "@/stores/slices/search";
import productReducer from "@/stores/slices/product";
const rootReducer = combineReducers({
  search: searchReducer,
  product: productReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
