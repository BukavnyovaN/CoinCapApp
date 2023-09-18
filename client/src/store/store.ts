import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import currencyInfoReducer from './currencyInfoSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currencyInfo: currencyInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
