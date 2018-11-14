import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'reducers/root_reducer';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(reducer, initialState);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

export default Root;


