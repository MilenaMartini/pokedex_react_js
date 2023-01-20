import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/Pg_Login'
import Poke from './pages/Pg_Pokedex/Pg_Poke'
import GlobalStyle from './Styles/Global'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Login/>
    {/* <Poke/> teste para ligação de telas */}
  </React.StrictMode>

);
