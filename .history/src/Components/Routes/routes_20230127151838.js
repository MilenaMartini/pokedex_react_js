import React from "react";
import Login from "../../pages/Login/Pg_Login"
import Poke from "../../pages/Pg_Pokedex/Pg_Poke"
import InfoPk from "../../pages/Pg_Pokedex/Pg_infor_extras"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/pokedex" element={<Poke/>} />
        <Route path="/pokemon" element={<InfoPk/>} />
      </Routes>
    </Router>
   );
}

export default Routering ;