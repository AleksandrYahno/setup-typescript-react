// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

type AppDispatch = typeof store.dispatch;
