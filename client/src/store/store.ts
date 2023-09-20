import { configureStore } from '@reduxjs/toolkit';

import currencyInfoReducer from './currencyInfoSlice';

export const store = configureStore({
  reducer: {
    currencyInfo: currencyInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
