import React, { useState } from "react";

const CadastroDeEmpresa = () => {
  const [form, setForm] = useState({
    nomeLoja: "",
    email: "",
    cnpj: "",
    endereco: "",
    senha: "",
    confirmacaoSenha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.senha !== form.confirmacaoSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Aqui você pode enviar os dados para o backend
    console.log("Dados cadastrados:", form);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Cadastro de Empresa
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nomeLoja"
          placeholder="Nome da Loja"
          value={form.nomeLoja}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          name="cnpj"
          placeholder="CNPJ"
          value={form.cnpj}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={form.endereco}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="password"
          name="confirmacaoSenha"
          placeholder="Confirmação de Senha"
          value={form.confirmacaoSenha}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Cadastrar-se
        </button>

        <button
          type="button"
          onClick={() => alert("Redirecionar para página de login")}
          className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default CadastroDeEmpresa;
