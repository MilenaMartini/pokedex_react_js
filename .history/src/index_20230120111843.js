import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './Styles/Global'
import Routering from './Components/Routes/routes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routering/>
  </React.StrictMode>

);
