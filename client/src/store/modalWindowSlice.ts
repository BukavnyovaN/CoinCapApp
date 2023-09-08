import { createSlice } from '@reduxjs/toolkit';

export interface IModalState {
  value: boolean;
}

const initialState: IModalState = {
  value: false,
};

export const modalSlice = createSlice({
  name: 'modal',
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

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
