import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalWindowSlice';
import modalCartReducer from './modalCartSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    modalCart: modalCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
