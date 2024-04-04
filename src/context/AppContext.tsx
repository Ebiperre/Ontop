import React, { Dispatch, SetStateAction, createContext, useState } from "react";
import { giftCards, giftCardType } from "../utilities/giftcardUtilities";

type AppContextProviderProps = {
  children: React.ReactNode
}

type AppContextProps = {
  cards: giftCardType
  setCards: Dispatch<SetStateAction<giftCardType>>
}

export const AppContext = createContext({} as AppContextProps);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [cards, setCards] = useState<giftCardType>(
        giftCards as giftCardType
    );


    return (
        <AppContext.Provider 
        value={{ 
            cards, 
            setCards
        }}>
            {children}
        </AppContext.Provider>
    );
  
    
};

export default AppContextProvider;
