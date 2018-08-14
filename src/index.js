import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import './styles.css';

import createStore from 'modules/store';

const config = createStore();

ReactDOM.render(
  <Provider store={config.store}>
    <PersistGate loading={null} persistor={config.persistor}>
      <App />
    </PersistGate>
  </Provider>, document.getElementById('root'));
