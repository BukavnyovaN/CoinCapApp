import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICart {
  id?: string;
  name?: string;
  symbol?: string;
  priceUsd?: string;
  amount?: number;
}

const localStorageInfo = localStorage.getItem('modalCartInfo') || null;
const initialState: ICart[] = localStorageInfo
  ? JSON.parse(localStorageInfo)
  : [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCurrencyInfoToCart: (state, action: PayloadAction<ICart>) => {
      state.push(action.payload);
    },
    parseCurrencyIntoCart: (state, action: PayloadAction<ICart[]>) => {
      state = [...action.payload];
      console.log([...action.payload]);
    },
  },
});

export const { addCurrencyInfoToCart, parseCurrencyIntoCart } =
  cartSlice.actions;
export default cartSlice.reducer;
