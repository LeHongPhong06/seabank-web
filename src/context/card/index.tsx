"use client";
import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Card, PayloadAction } from "./data";

const CardContext = createContext<Card[] | null>(null);
const CardDispatchContext = createContext<Dispatch<PayloadAction> | null>(null);

const cardReducer = (cardList: Array<Card>, action: PayloadAction) => {
  const { payload } = action;
  const data = [...cardList];
  const indexCard = data.findIndex((item) => item.id === payload?.id);
  switch (action.type) {
    case "change":
      if (indexCard !== -1) {
        data.splice(indexCard, 1);
      } else {
        if (payload) {
          data.push(payload);
        }
      }
      return data;
    case "swap":
      if (payload && indexCard !== -1) {
        data[indexCard] = payload;
      }
      return data;
    case "delete":
      if (indexCard !== -1 && payload) {
        data.splice(indexCard, 1);
      }
      return data;
    case "clear":
      return initialCard;
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

const initialCard: Array<Card> = [];
export default ProviderCardContext;
export const useCard = () => useContext(CardContext);
export const useCardDispatch = () => useContext(CardDispatchContext);
