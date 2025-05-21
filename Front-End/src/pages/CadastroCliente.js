import React, { useState } from "react";
import Empresa from "../components/usuarios/Empresa";
import Cliente from "../components/usuarios/Cliente"; // Novo componente criado
import "../App.css"; // Ou o CSS que desejar

export default function App() {
  const [tipoUsuario, setTipoUsuario] = useState("");

  const handleEscolha = (tipo) => {
    setTipoUsuario(tipo);
  };

  return (
    <div className="container">
      <div className="escolha">
        <button onClick={() => handleEscolha("cliente")}>Sou Cliente</button>
        <button onClick={() => handleEscolha("empresa")}>Sou Empresa</button>
      </div>

      {tipoUsuario === "empresa" && <Empresa />}
      {tipoUsuario === "cliente" && <Cliente />}
    </div>
  );
}
