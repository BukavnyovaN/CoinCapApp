import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAssets {
  id?: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply?: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface ICart {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  amount: any;
  datetime: number;
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
      state.cartList.push(action.payload);
    },
    removeCurrencyInfoFromCart: (state, action: PayloadAction<string>) => {
      state.cartList = state.cartList.filter(({ id }) => id !== action.payload);
    },
    handleTotalCart: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    updateCart: (state, action: PayloadAction<IAssets[] | undefined>) => {
    },
  },
});

export const {
  addCurrencyInfoToCart,
  removeCurrencyInfoFromCart,
  handleTotalCart,
  updateCart,
} = cartSlice.actions;
export default cartSlice.reducer;
