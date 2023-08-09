import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICart {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  amount: number;
}

export interface IInitialState {
  cartList: ICart[];
  total: number;
}

const currentCartList = localStorage.getItem('currentCartList') || null;
const currentCartTotal = localStorage.getItem('currentCartTotal') || null;

const initialState: IInitialState = {
  cartList: currentCartList ? JSON.parse(currentCartList) : [],
  total: currentCartTotal ? JSON.parse(currentCartTotal) : 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCurrencyInfoToCart: (state, action: PayloadAction<ICart>) => {
      const isCurrencyExist = state.cartList.find(
        ({ id }) => id === action.payload.id
      );

      if (isCurrencyExist) {
        isCurrencyExist.amount += action.payload.amount;
        return state;
      } else {
        state.cartList.push(action.payload);
      }
    },
    removeCurrencyInfoFromCart: (state, action: PayloadAction<string>) => {
      state.cartList = state.cartList.filter(({ id }) => id !== action.payload);
    },
    handleTotalCart: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const {
  addCurrencyInfoToCart,
  removeCurrencyInfoFromCart,
  handleTotalCart,
} = cartSlice.actions;
export default cartSlice.reducer;
