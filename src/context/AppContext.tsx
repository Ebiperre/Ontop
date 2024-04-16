import React, { Dispatch, SetStateAction, createContext, useState } from "react";
import { giftCards, giftCardType } from "../utilities/giftcardUtilities";
import { debitCards, debitCardType } from "../utilities/debitCards";

type AppContextProviderProps = {
    children: React.ReactNode
}

type AppContextProps = {
    cards: giftCardType
    setCards: Dispatch<SetStateAction<giftCardType>>
    paymentCards: debitCardType
    setPaymentCards: Dispatch<SetStateAction<debitCardType>>
}

export const AppContext = createContext({} as AppContextProps);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [cards, setCards] = useState<giftCardType>(
        giftCards as giftCardType
    );
    const [paymentCards, setPaymentCards] = useState<debitCardType>(
        debitCards as debitCardType
    );


    return (
        <AppContext.Provider
            value={{
                cards,
                setCards,
                paymentCards,
                setPaymentCards,
            }}>
            {children}
        </AppContext.Provider>
    );


};

export default AppContextProvider;
