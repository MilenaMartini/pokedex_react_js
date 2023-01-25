import React from "react";
import Login from "../../pages/Login/Pg_Login"
import Poke from "../Navbar/Navbar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/pokedex" element={<Poke/>} />
      </Routes>
    </Router>
   );
}

export default Routering ;