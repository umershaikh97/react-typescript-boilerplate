import { createSlice } from '@reduxjs/toolkit';
import { ThemeMode } from '@/constants/common';
import { ReduxTypes } from '@/types';

const initialState: ReduxTypes.UISliceState = {
  themeMode: ThemeMode.LIGHT,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      const currentMode = state.themeMode;
      if (currentMode === ThemeMode.DARK) {
        state.themeMode = ThemeMode.LIGHT;
      } else {
        state.themeMode = ThemeMode.DARK;
      }
    },
  },
});

export const { toggleThemeMode } = uiSlice.actions;
export default uiSlice.reducer;
