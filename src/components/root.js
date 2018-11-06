import React from 'react';
import { Provider } from 'react-redux';
import App from './app/App';
import store from '../store/store';

import { getAllCategories } from '../reducers/selectors';

window.store = store;
window.getAllCategories = getAllCategories;

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

