import React, { useState } from "react";
import axios from "axios";

export default function FormularioCliente({ onCadastroConcluido }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erroSenha, setErroSenha] = useState("");

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
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCPF(cpf);
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
      alert("Senhas não coincidem");
      return;
    }

    const dados = {
      nmUsuario: nome,
      dsEmail: email,
      dsSenha: senha,
      flTipoUsuario: 0, // cliente
      nuCpfCnpj: cpf,
      dtNascimento,
      dsTelefone: telefone,
    };

    axios
      .post("/usuarios", dados)
      .then((sucesso) => {
        alert("Cadastro realizado com sucesso");
        console.log(sucesso.data);
        onCadastroConcluido?.(); // opcional: callback
      })
      .catch((erro) => {
        alert("Erro ao cadastrar");
        console.log(erro);
      });
  };

  return (
    <div className="FormularioCliente">
      <h2>Cadastro - Cliente</h2>
      <form onSubmit={handleSubmitChange}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="CPF"
          maxLength={14}
          value={cpf}
          onChange={handleCpfChange}
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={dtNascimento}
          onChange={handleDtNascimentoChange}
        />
        <input
          type="text"
          placeholder="Telefone"
          maxLength={15}
          value={telefone}
          onChange={handleTelefoneChange}
        />
        <input
          type={mostrarSenha ? "text" : "password"}
          placeholder="Senha"
          value={senha}
          onChange={handleSenhaChange}
        />
        <span onClick={alterarVisibilidade} style={{ cursor: "pointer" }}>
          {mostrarSenha ? "🙈" : "👁️"}
        </span>
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={handleConfirmarSenhaChange}
        />
        {erroSenha && <p style={{ color: "red" }}>{erroSenha}</p>}
        {senha && confirmarSenha && senha !== confirmarSenha && (
          <p style={{ color: "red" }}>As senhas não coincidem.</p>
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
