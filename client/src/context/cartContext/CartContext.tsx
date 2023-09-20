import { createContext, useEffect, useReducer } from "react";
import cartReducer, { initialState } from "./CartReducer";
import { any } from "prop-types";

export const CartContext = createContext({ total: any, cartList: any, addToCart: (item: any) => {}, removeFromCart: (item: any) => {} });

export const CartProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item: any) => {
        const updatedCart = state.cartList;
        updatedCart.push(item);
        localStorage.setItem('currentCartList', JSON.stringify(updatedCart));
        getTotal(updatedCart)
        dispatch({
            type: 'add',
            payload: updatedCart,
        })
        console.log(state)
    }

    const removeFromCart = (name: any) => {
        const updatedCart = state.cartList.filter((elem: any) => elem.name !== name)
        console.log(updatedCart)
        localStorage.setItem('currentCartList', JSON.stringify(updatedCart));
        getTotal(updatedCart)
        dispatch({
            type: 'remove',
            payload: updatedCart,
        })
    }

    const getTotal = (cartList: any) => {
        let total = cartList.reduce(
            (prev: any, next: any) => prev + +next.priceUsd * next.amount,
            0
          ) || 0;
        localStorage.setItem('currentCartTotal', JSON.stringify(total));

        dispatch({
            type: 'getTotal',
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