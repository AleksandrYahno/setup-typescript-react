import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../action/widgets';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
