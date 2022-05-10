import React from 'react';
import ReactDOM from 'react-dom';
import './css/general.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0ProviderWithHistory>
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


