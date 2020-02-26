import React from 'react';
import { connectReduxDevtools } from 'mst-middlewares';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootStore } from './rootStore';

// eslint-disable-next-line @typescript-eslint/no-var-requires
connectReduxDevtools(require('remotedev'), rootStore);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
