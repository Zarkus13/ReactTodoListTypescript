import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from 'store'
import { BrowserRouter } from 'react-router-dom';
import Template from 'components/Template';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  </Provider>
);
