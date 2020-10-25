import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import App from './components/App/App';
import './helpers/toastrSetting';

import 'modern-normalize/modern-normalize.css';
import 'toastr/build/toastr.css';
import './main.scss';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
