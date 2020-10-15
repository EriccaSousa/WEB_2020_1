import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';

import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import { store, rrfProps } from './store/storeConfig'

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
