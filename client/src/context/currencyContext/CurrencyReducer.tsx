export interface ICurrencyInfoState {
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
    amount: number;
}

export const initialState: ICurrencyInfoState = {
    id: '',
    name: '',
    symbol: '',
    priceUsd: '',
    amount: 0,
}

const currencyReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_CURRENCY_ID":
            return {
                ...state,
                id: action.payload,
            }
        case "ADD_CURRENCY_PRICE_USD":
            return {
                ...state,
                priceUsd: action.payload,
            }
        case "ADD_CURRENCY_NAME":
            return {
                ...state,
                name: action.payload,
            }
        case "ADD_CURRENCY_SYMBOL":
            return {
                ...state,
                symbol: action.payload,
            }
        case "ADD_CURRENCY_AMOUNT":
            return {
                ...state,
                amount: action.payload,
            }
        case "ADD_CURRENCY_INFO":
            return {
                ...state,
                ...action.payload,
            }
        default: throw new Error("Cannot find the action type")
    }
};

export default currencyReducer;