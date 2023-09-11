import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalWindowSlice';
import modalCartReducer from './modalCartSlice';
import cartReducer from './cartSlice';
import currencyInfoReducer from './currencyInfoSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    modalCart: modalCartReducer,
    cart: cartReducer,
    currencyInfo: currencyInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
