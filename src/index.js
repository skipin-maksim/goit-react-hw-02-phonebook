import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import './js/toastrSetting';

import 'modern-normalize/modern-normalize.css';
import 'toastr/build/toastr.css';
import './main.scss';

ReactDOM.render(<App />, document.querySelector('#root'));
