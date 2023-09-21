import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "./CartReducer";
import { any } from "prop-types";
import { ICart } from "./CartReducer";

export const CartContext = createContext({ 
    total: any, 
    cartList: any, 
    addToCart: (item: any) => {}, 
    removeFromCart: (name: string) => {} 
});

export const CartProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item: any) => {
        const updatedCart = state.cartList;
        updatedCart.push(item);
        localStorage.setItem('currentCartList', JSON.stringify(updatedCart));
        getTotal(updatedCart)
        dispatch({
            type: 'ADD_TO_CART',
            payload: updatedCart,
        })
    }

    const removeFromCart = (name: string) => {
        const updatedCart = state.cartList.filter((elem: ICart) => elem.name !== name)
        localStorage.setItem('currentCartList', JSON.stringify(updatedCart));
        getTotal(updatedCart)
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: updatedCart,
        })
    }

    const getTotal = (cartList: ICart[]) => {
        let total = cartList.reduce(
            (prev: any, next: any) => prev + +next.priceUsd * next.amount,
            0
          ) || 0;
        localStorage.setItem('currentCartTotal', JSON.stringify(total));

        dispatch({
            type: 'GET_TOTAL',
            payload: total,
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}