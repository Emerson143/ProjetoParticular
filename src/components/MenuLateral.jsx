import { Link } from "react-router-dom";
import { X } from "lucide-react";
import './MenuLateral.css';

export default function MenuLateral({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && <div className="fundo-escuro" onClick={() => setIsOpen(false)}></div>}

      {/* Menu lateral que pode ser clicado para abrir */}
      <div className={`menu-lateral ${isOpen ? "aberto" : "fechado"}`} onClick={() => !isOpen && setIsOpen(true)}>
               

        {/* Itens do menu */}
        <ul>
          
          
          <li><Link to="/home">🏠 {isOpen && "Home"}</Link></li>
          <li><Link to="/">🔑 {isOpen && "Login"}</Link></li>
          <li><Link to="/register">📝 {isOpen && "Cadastro"}</Link></li>
        </ul>
      </div>
    </>
  );
}
