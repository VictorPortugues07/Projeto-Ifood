<<<<<<< HEAD
import React, { useState } from "react";
import Empresa from "../components/usuarios/Empresa";
import Cliente from "../components/usuarios/Cliente"; // Novo componente criado
import "../App.css"; // Ou o CSS que desejar
=======
import React, { useState, useEffect } from "react";
import Empresa from "../components/Empresa";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import FormularioCliente from "../components/FormularioCliente";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
>>>>>>> 923f6a69f4b36a5b422948929d863150e54bb70a

export default function App() {
  const [tipoUsuario, setTipoUsuario] = useState("");

  const handleEscolha = (tipo) => {
    setTipoUsuario(tipo);
  };

  return (
    <div className="container">
<<<<<<< HEAD
      <div className="escolha">
        <button onClick={() => handleEscolha("cliente")}>Sou Cliente</button>
        <button onClick={() => handleEscolha("empresa")}>Sou Empresa</button>
=======
      <div className="container">
        <div className="escolha">
          <button onClick={() => handleEscolha("cliente")}>Sou Cliente</button>
          <button onClick={() => handleEscolha("empresa")}>Sou Empresa</button>
        </div>

        {tipoUsuario === "empresa" && <Empresa />}
        {tipoUsuario === "cliente" && <FormularioCliente />}
>>>>>>> 923f6a69f4b36a5b422948929d863150e54bb70a
      </div>

      {tipoUsuario === "empresa" && <Empresa />}
      {tipoUsuario === "cliente" && <Cliente />}
    </div>
  );
}
