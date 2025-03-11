import { useState } from "react";
import MenuLateral from "../components/MenuLateral";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      {/* Menu lateral */}
      <MenuLateral isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Container do conteúdo principal respeitando o menu lateral */}
      <div
        className={`transition-all duration-300 p-6 flex-1 ${
          isOpen ? "ml-[200px]" : "ml-[60px]"
        }`}
      >
        <h1 className="text-4xl font-bold">Bem-vindo ao Painel</h1>
      </div>
    </div>
  );
}
