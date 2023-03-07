import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './Styles/Global.js'
import Routering from './Components/Routes/routes'
import { RecoilRoot } from 'recoil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <GlobalStyle/>
    <Routering/>
    </RecoilRoot>
  </React.StrictMode>

);
