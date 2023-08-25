import { configureStore } from '@reduxjs/toolkit';
import { coinCapApi } from '../API/coincap';
import modalReducer from './modalWindowSlice';
import modalCartReducer from './modalCartSlice';
import cartReducer from './cartSlice';
import currencyInfoReducer from './currencyInfoSlice';

export const store = configureStore({
  reducer: {
    [coinCapApi.reducerPath]: coinCapApi.reducer,
    modal: modalReducer,
    modalCart: modalCartReducer,
    cart: cartReducer,

    currencyInfo: currencyInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinCapApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
