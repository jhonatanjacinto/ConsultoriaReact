import React from 'react';
import ReactDOM from 'react-dom';
import MinhaAgenda from './MinhaAgenda';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MinhaAgenda />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
