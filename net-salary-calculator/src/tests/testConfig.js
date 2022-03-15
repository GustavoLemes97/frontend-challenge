import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../redux/reducers';

const renderWithRedux = (component, {
  initialState = {},
  store = createStore(rootReducers, initialState),
} = {}) => ({
  ...render(
    <Provider store={ store }>
      { component }
    </Provider>,
  ),
  store,
});

export default renderWithRedux;
