import { createAction, createReducer } from '@reduxjs/toolkit';

import { RootReducer } from '../reducers/rootReducer';

interface Counter {
  isAuth: boolean;
  test: number;
}

const testAction = createAction<boolean>('increment');
const testAction1 = createAction<boolean>('increment1');

export const actionCreators = {
  testAction,
  testAction1,
};

const initialState = {
  isAuth: false,
  test: 20,
};

export const counterReducer = createReducer(initialState, {
  [testAction.type]: (state, { payload }) => ({ ...state, isAuth: payload }),
});

export const selectTest = (state: RootReducer) => state.counter;
