import { configureStore } from '@reduxjs/toolkit';

import surfboardReducer from './reducers/surfboardReducer';

export const store = configureStore({
  reducer: {
    surfboard: surfboardReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;