import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import store from './store/store';
import { getAllCategories } from './reducers/selectors';

window.store = store;
window.getAllCategories = getAllCategories;


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
