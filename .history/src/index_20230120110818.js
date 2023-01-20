import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login/Pg_Login'
import GlobalStyle from './Styles/Global'
import Routering from './Components/Routes/routes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Login/>
    {/* <Poke/> teste para ligação de telas */}
  </React.StrictMode>

);