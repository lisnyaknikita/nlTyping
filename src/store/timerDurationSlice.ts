import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IDurationState {
  seconds: number;
}

const initialState: IDurationState = {
  seconds: 15,
};

export const timerDurationSlice = createSlice({
  name: 'duration',
  initialState,
  reducers: {
    resetDuration: (state, action: PayloadAction<number>) => {
      state.seconds = action.payload;
    },
  },
});

export const { resetDuration } = timerDurationSlice.actions;

export default timerDurationSlice.reducer;
