import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './slices/GameSlice';
import scoreReducer from './slices/ScoreSlice';

export default configureStore({
  reducer: {
    game: gameReducer,
    score: scoreReducer,
  },
});
