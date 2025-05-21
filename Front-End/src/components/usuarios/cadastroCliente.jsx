import React, { useState, useEffect } from "react";
import Empresa from "./components/usuarios/Empresa";
import Cliente from "./components/usuarios/Cliente";
import axios from "axios";  
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";

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
      {tipoUsuario === "cliente" && (<><Cliente /> </> )}
    </div>
  );
}
