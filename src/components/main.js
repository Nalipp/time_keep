import React from 'react';
import App from './app/App';
import store from '../store/store';
import Root from '../Root';

import { getAllCategories } from '../reducers/selectors';

window.store = store;
window.getAllCategories = getAllCategories;

const Main = () => (
  <Root>
    <App />
  </Root>
);

export default Main;

