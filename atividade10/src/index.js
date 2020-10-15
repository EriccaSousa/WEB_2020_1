import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';

import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';


ReactDOM.render(
  <Provider >
    <ReactReduxFirebaseProvider >
        <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
