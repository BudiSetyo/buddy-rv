import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/scss/main.scss';
import '@/plugins/typography';
import App from './App';
// import { Provider } from 'react-redux';
// import reduxStore from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
