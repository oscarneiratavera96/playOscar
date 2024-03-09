import { configureStore } from '@reduxjs/toolkit';
import playsReducer from './plays/plays';

const store = configureStore({
  reducer: {
    plays: playsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
