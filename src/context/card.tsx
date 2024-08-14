"use client";
import React, { createContext, Dispatch, useContext, useReducer } from "react";

export type PayloadAction = {
  type: "change" | "clear";
  id?: number;
};
const CardContext = createContext<number[] | null>(null);
const CardDispatchContext = createContext<Dispatch<PayloadAction> | null>(null);

const cardReducer = (cardList: Array<number>, action: PayloadAction) => {
  const data = [...cardList];
  switch (action.type) {
    case "change":
      if (data.includes(action.id || 1)) {
        const index = data.findIndex((item) => item === action.id);
        if (index !== -1) {
          data.splice(index, 1);
        }
      } else {
        data.push(action.id || 1);
      }
      return data;
    case "clear":
      return [];
    default:
      return data;
  }
};
const ProviderCardContext = ({ children }: { children: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(cardReducer, initialCard);
  return (
    <CardContext.Provider value={tasks}>
      <CardDispatchContext.Provider value={dispatch}>{children}</CardDispatchContext.Provider>
    </CardContext.Provider>
  );
};

const initialCard: Array<number> = [];
export default ProviderCardContext;
export const useCard = () => useContext(CardContext);
export const useCardDispatch = () => useContext(CardDispatchContext);
