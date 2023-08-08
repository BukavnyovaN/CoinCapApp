import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IModalPortfolioToggle {
  value: boolean;
}

const initialState: IModalPortfolioToggle = {
  value: false,
};

export const modalCartSlice = createSlice({
  name: 'modalCart',
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
    toggleByAmount: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { open, close, toggleByAmount } = modalCartSlice.actions;
export default modalCartSlice.reducer;
