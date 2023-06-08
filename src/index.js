import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/main.css'
import{ BrowserRouter } from 'react-router-dom'
import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root')

if(!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
