import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/pglogin'
import GlobalStyle from './styles/global'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Login/>
  </React.StrictMode>

);
