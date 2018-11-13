import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';

import { getAllCategories } from 'reducers/selectors';

window.store = store;
window.getAllCategories = getAllCategories;

const Root = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Root;


