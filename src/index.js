import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './redux/store';
import App from './components/App/App';
import Spinner from './components/Spinner/Spinner';
import './helpers/toastrSetting';

import 'modern-normalize/modern-normalize.css';
import 'toastr/build/toastr.css';
import './main.scss';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
