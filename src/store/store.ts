import { configureStore } from '@reduxjs/toolkit';
import timerDurationSlice from './timerDurationSlice';
import selectedLanguageSlice from './selectedLanguageSlice';

export const store = configureStore({
  reducer: {
    timerDuration: timerDurationSlice,
    wordsLanguage: selectedLanguageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
