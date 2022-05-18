import { createSlice, configureStore } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtered: (_, action) =>
      initialState.filter(item => item.includes(action.payload)),
  },
});

export const { filtered } = filterSlice.actions;

export const store = configureStore({
  reducer: filterSlice.reducer,
});
