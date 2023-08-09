import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../utils/getLocalStorage';

export interface ICart {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  amount: number;
}

const initialState: ICart[] = getLocalStorage('modalCartInfo')
  ? getLocalStorage('modalCartInfo')
  : [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCurrencyInfoToCart: (state, action: PayloadAction<ICart>) => {
      const isCurrencyExist = state.find(({ id }) => id === action.payload.id);

      if (isCurrencyExist) {
        isCurrencyExist.amount += action.payload.amount;
        return state;
      }

      state.push(action.payload);
    },
    removeCurrencyInfoFromCart: (state, action: PayloadAction<string>) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addCurrencyInfoToCart, removeCurrencyInfoFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
