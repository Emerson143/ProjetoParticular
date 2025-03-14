import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/home";
import Layout from "./components/Layout"; // Importando o Layout

function App() {
  return (
    <Router>
      <Routes>
        {/* Páginas sem menu */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Páginas com menu (usando o Layout) */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
