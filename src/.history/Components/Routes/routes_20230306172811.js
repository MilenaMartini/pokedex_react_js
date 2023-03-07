import React from "react";
import Login from "../../pages/Login/Pg_Login"
import Poke from "../../pages/Pg_Pokedex/Pg_Poke"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/pokedex" element={<Poke/>} />
        {/* <Route path="/pokedex/:id" element={<NewPk/>} /> */}
      </Routes>
    </Router>
   );
}

export default Routering ;