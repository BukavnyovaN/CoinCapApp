import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { open, close } = modalCartSlice.actions;
export default modalCartSlice.reducer;
