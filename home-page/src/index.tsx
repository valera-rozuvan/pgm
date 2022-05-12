import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './store/reducers/rootReducer';

import App from './App';

const store = createStore(rootReducer);

const root = document.getElementById('root');
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root,
);