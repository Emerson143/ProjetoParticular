import { useState } from "react";
import MenuLateral from "../components/MenuLateral";
import Container from "../components/Container";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      {/* Menu lateral */}
      <MenuLateral isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Conteúdo principal */}
      <Container isMenuOpen={isOpen}>
        <h1 className="text-4xl font-bold">Bem-vindo ao Painel</h1>
      </Container>
    </div>
  )
}