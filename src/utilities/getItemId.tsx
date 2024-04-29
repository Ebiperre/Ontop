import { debitCardType } from "./debitCards";

export const getItemById = (id: string | null , paymentCards: debitCardType) => {
    return paymentCards.find(item => item.id === id);
  };
