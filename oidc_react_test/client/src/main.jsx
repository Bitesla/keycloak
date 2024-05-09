import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { AuthProvider } from 'react-oidc-context';

const oidcConfig = {
  authority: "http://localhost:8080/realms/master",
  client_id: "postman",
  scope: "openid profile email",
  redirect_uri: `http://localhost:5000/callback`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider {...oidcConfig} post_logout_redirect_uri='http://localhost:5000' >
    <App />
</AuthProvider>
)
