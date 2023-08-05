import { configureStore } from '@reduxjs/toolkit';
import timerDurationReducer from '@/store/timerDurationSlice';

export const store = configureStore({
  reducer: {
    timerDuration: timerDurationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
