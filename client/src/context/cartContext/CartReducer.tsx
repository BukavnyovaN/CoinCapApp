export interface ICart {
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
    amount: any;
    datetime: number;
}

export const initialState = {
    total: JSON.parse(localStorage.getItem('currentCartTotal') || '0'),
    cartList: JSON.parse(localStorage.getItem('currentCartList') || '[]'),
}

const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartList: action.payload,
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartList: action.payload,
            }
        case "GET_TOTAL":
            return {
                ...state,
                total: action.payload,
            }
        default: throw new Error("Cannot find the action type in cartReducer")
    }
};

export default cartReducer;