import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/index'
import GlobalStyle from './styles/global'
// import image from './Components/img/fundologin.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Login />
    {/* <img src={image}/> */}
  </React.StrictMode>
);
