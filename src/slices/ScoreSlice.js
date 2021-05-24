import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const ScoreSlice = createSlice({
  name: 'score',
  initialState: 0,
  reducers: {
    setScore: (state, action) => (state += action.payload),
  },
});

export const { setScore } = ScoreSlice.actions;
export default ScoreSlice.reducer;
