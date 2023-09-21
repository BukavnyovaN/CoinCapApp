import { createContext, useReducer } from "react";
import currencyReducer, { ICurrencyInfoState, initialState } from "./CurrencyReducer";
import { any, number, string } from "prop-types";

export const CurrencyContext = createContext({
        id: string,
        name: string,
        symbol: string,
        priceUsd: string,
        amount: number,
        info: any,
        addCurrencyId: (id: string) => {},
        addCurrencyPriceUsd: (priceUsd: string) => {},
        addCurrencyName: (name: string) => {},
        addCurrencySymbol: (symbol: string) => {},
        addCurrencyAmount: (amount: number) => {},
});

export const CurrencyProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(currencyReducer, initialState);

    const addCurrencyId = (id: string) => {
        const currencyId = id;
        dispatch({
            type: 'ADD_CURRENCY_ID',
            payload: currencyId,
        })
    }

    const addCurrencyPriceUsd = (priceUsd: string) => {
        const currencyPriceUsd = priceUsd;
        dispatch({
            type: 'ADD_CURRENCY_PRICE_USD',
            payload: currencyPriceUsd,
        })
    }

    const addCurrencyName = (name: string) => {
        const currencyName = name;
        dispatch({
            type: 'ADD_CURRENCY_NAME',
            payload: currencyName,
        })
    }

    const addCurrencySymbol = (symbol: string) => {
        const currencySymbol = symbol;
        dispatch({
            type: 'ADD_CURRENCY_SYMBOL',
            payload: currencySymbol,
        })
    }

    const addCurrencyAmount = (amount: number) => {
        const currencyAmount = amount;
        dispatch({
            type: 'ADD_CURRENCY_AMOUNT',
            payload: currencyAmount,
        })
    }

    const addCurrencyInfo = (info: ICurrencyInfoState) => {
        const currencyInfo = info;
        dispatch({
            type: 'ADD_CURRENCY_INFO',
            payload: currencyInfo,
        })
    }

    const value = {
        id: state.id,
        name: state.name,
        symbol: state.symbol,
        priceUsd: state.priceUsd,
        amount: state.amount,
        info: state,
        addCurrencyId,
        addCurrencyPriceUsd,
        addCurrencyName,
        addCurrencySymbol,
        addCurrencyAmount,
    }

    return <CurrencyContext.Provider value={value}>
        {children}
    </CurrencyContext.Provider>
}