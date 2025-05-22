import React, { useState, useEffect } from "react";
import Empresa from "../components/Empresa";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import FormularioCliente from "../components/FormularioCliente";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function App() {
  const [tipoUsuario, setTipoUsuario] = useState(""); //
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erroSenha, setErroSenha] = useState("");
  const [modo, setModo] = useState("");
  const [posicao, setPosicao] = useState("");
  const [endereco, setEndereco] = useState("");
  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    setPosicao([lat, lng]);

    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/reverse",
        {
          params: {
            format: "json",
            lat,
            lon: lng,
          },
        }
      );
      const enderecoCompleto = response.data.display_name;
      setEndereco(enderecoCompleto);
    } catch (erro) {
      console.error("Erro ao obter endereço: ", erro);
      alert("Erro ao buscar o endereço. Tente novamente");
    }
  };

  const handleEscolha = (tipo) => {
    setTipoUsuario(tipo);
  };

  const alterarVisibilidade = () => {
    setMostrarSenha((prev) => !prev);
  };

  const handleTelefoneChange = (e) => {
    let tel = e.target.value.replace(/\D/g, "");

    if (tel.length <= 10) {
      tel = tel
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      tel = tel
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    setTelefone(tel);
  };
  const handleDtNascimentoChange = (e) => {
    setDtNascimento(e.target.value);
  };
  const handleCpfChange = (e) => {
    let cpf = e.target.value.replace(/\D/g, "");
    cpf = cpf
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d(1,2))$/, "$1_$2");
    setCPF(cpf);
  };
  const handleCnpjChange = (e) => {
    let cnpj = e.target.value.replace(/\D/g, "");
    cnpj = cnpj
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const validarSenha = (senha) => {
    const temMaiuscula = /[A-Z]/.test(senha);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    const tamanhoMinimo = senha.length >= 8;
    return temMaiuscula && temEspecial && tamanhoMinimo;
  };

  const handleSenhaChange = (e) => {
    const novaSenha = e.target.value;
    setSenha(novaSenha);

    if (!validarSenha(novaSenha)) {
      setErroSenha(
        "A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um caractere especial."
      );
    } else {
      setErroSenha("");
    }
  };
  const handleConfirmarSenhaChange = (e) => {
    setConfirmarSenha(e.target.value);
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();

    if (!validarSenha(senha)) {
      alert("A senha não atende aos critérios");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("Senha não coincidem");
    }
    const dados = {
      nmUsuario: nome,
      dsEmail: email,
      dsSenha: senha,
      flTipoUsuario: tipoUsuario === "cliente" ? 0 : 1,
      nuCpfCnpj: cpf,
      dtNascimento,
      dsTelefone: telefone,
    };

    axios
      .post("/usuarios", dados)
      .then((sucesso) => {
        alert("Cadastro Realizado com sucesso");
        console.log(sucesso.data);
      })
      .catch((erro) => {
        alert("Erro ao Cadastrar");
        console.log(erro);
      });
  };

  return (
    <div className="container">
      <div className="container">
        <div className="escolha">
          <button onClick={() => handleEscolha("cliente")}>Sou Cliente</button>
          <button onClick={() => handleEscolha("empresa")}>Sou Empresa</button>
        </div>

        {tipoUsuario === "empresa" && <Empresa />}
        {tipoUsuario === "cliente" && <FormularioCliente />}
      </div>
    </div>
  );
}
