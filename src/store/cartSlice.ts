import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICart {
  id?: string;
  name?: string;
  symbol?: string;
  priceUsd?: string;
  amount?: number;
}

const initialState: ICart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCurrencyInfoToCart: (state, action: PayloadAction<ICart>) => {
      state.push(action.payload);
    },
    parseCurrencyIntoCart: (state, action: PayloadAction<ICart[]>) => {
      state = action.payload;
    },
  },
});

export const { addCurrencyInfoToCart, parseCurrencyIntoCart } =
  cartSlice.actions;
export default cartSlice.reducer;
