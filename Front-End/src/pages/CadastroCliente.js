import React, { useState } from "react";

export default function App() {
    const [tipoUsuario, setTipoUsuario] = useState(null); //
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("");
    const [dtNascimento, setDtNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [erroSenha, setErroSenha] = useState("");
    const [modo, setModo] = useState("");
    
    const handleEscolha = (tipo) => {
        setTipoUsuario(tipo);
    };

    const alterarVisibilidade = () => {
        setMostrarSenha((prev) => !prev);
    }

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
    }
    const handleDtNascimentoChange = (e) => {
        setDtNascimento(e.target.value)
    }
    const handleCpfChange = (e) => {
        let cpf = e.target.value.replace(/\D/g, "");
        cpf = cpf
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d(1,2))$/, "$1_$2")
        setCPF(cpf);

    }

    const validarSenha = (senha) => {
        const temMaiuscula = /[A-Z]/.test(senha);
        const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
        const tamanhoMinimo = senha.length >= 8;
        return temMaiuscula && temEspecial && tamanhoMinimo;
    }

    const handleSenhaChange = (e) => {
        const novaSenha = e.target.value;
        setSenha(novaSenha);

        if (!validarSenha(novaSenha)) {
            setErroSenha("A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um caractere especial.");
        } else {
            setErroSenha("");
        }
    };
    const handleConfirmarSenhaChange = (e) => {
        setConfirmarSenha(e.target.value);
    }

    const handleSubmitChange = (e) => {
        e.preventDefault();

        if(!validarSenha(senha)) {
            alert ("A senha não atende aos critérios")
            return
        }

        if (senha !== confirmarSenha) {
            alert("Senha não coincidem");
        }
    };

    return (
        <div className="container">
            <div className="escolha">
                <button onClick={() => handleEscolha("cliente")}>Sou Cliente</button>

                <button onClick={() => handleEscolha("empresa")}>Sou Empresa</button>
            </div>

            {tipoUsuario === "cliente" && (
                <div className="FormularioCliente">
                    <h2>Cadastro - Cliente</h2>
                    <form onSubmit={handleSubmitChange}>
                        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="CPF" maxLength={14} value={cpf} onChange={handleCpfChange} />

                        <input type="date" placeholder="Data de Nascimento" maxLength={10} value={dtNascimento} onChange={handleDtNascimentoChange} />
                        <input type="text" placeholder="Telefone" maxLength={15} value={telefone} onChange={handleTelefoneChange} />
                        <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} onChange={handleSenhaChange} />
                        <span onClick={alterarVisibilidade}>{mostrarSenha ? "🙈" : "👁️"}</span>
                        <input type="password" placeholder="Confirmar Senha" value = {confirmarSenha} onChange={handleConfirmarSenhaChange}/>
                        {erroSenha && <p style={{ color: "red" }}>{erroSenha}</p>} {senha && confirmarSenha && senha !== confirmarSenha && (<p style={{ color: "red" }}>As senhas não coincidem.</p>)}
                        <button type = "submit">Cadastrar</button>
    
                    </form>
                </div>
            )}
            {tipoUsuario === "empresa" && (
                <div className="FormularioEmpresa">
                    <h2>Cadastro - Empresa</h2>
                    <form>
                        <input type="text" placeholder="CNPJ" />
                    </form>
                </div>
            )}
        </div>
    )
};
