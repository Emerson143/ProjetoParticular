import React, { useState } from "react";
import MenuLateral from "./MenuLateral"; // Importa o Menu Lateral
import Container from "./Container"; // Importa o Container

import "../App.js";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false); // Controla o estado do menu

  return (
    <div className="layout">
      {/* Botão para abrir/fechar o menu */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menu Lateral */}
      <MenuLateral isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Overlay para fechar o menu ao clicar fora */}
      {isOpen && <div className="overlay active" onClick={() => setIsOpen(false)}></div>}

      {/* Container ajusta o layout conforme o menu está aberto ou fechado */}
      <Container isOpen={isOpen}>
        {children}
      </Container>
    </div>
  );
}

export default Layout;