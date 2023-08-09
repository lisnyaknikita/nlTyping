import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type languageType = 'english' | 'ukrainian' | 'russian';

interface ILanguageState {
  language: languageType;
}

const initialState: ILanguageState = {
  language: 'ukrainian',
};

export const selectedLanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    selectLanguage: (state, action: PayloadAction<languageType>) => {
      state.language = action.payload;
    },
  },
});

export const { selectLanguage } = selectedLanguageSlice.actions;

export default selectedLanguageSlice.reducer;
