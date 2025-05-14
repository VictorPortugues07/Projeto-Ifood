import React, {useState} from "react";

export default function App() {
    const [tipoUsuario, serTipoUsuario] = useState(null); //

    const handleEscolha = (tipo) => {
        setTipoUsuario(tipo);
    };

    const handleCPFChange = (e) => {
        let cpf = e.target.value.replace(/\D/g, "");
        cpf = cpf
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d(1,2))$/, "$1-$2")
        setCPF(cpf);

    }

    return (
        <div className="container">
            <div className="escolha">
                <button onClick={() => handleEscolha("cliente")}>Sou Cliente</button> 
                
                <button onClick={() => handleEscolha("empresa")}>Sou Empresa</button>
            </div>

            {tipoUsuario && (
                <div className = "Formulario">
                    <h2>Cadastro - {tipoUsuario === "cliente" ? "Cliente" : "Empresa"}</h2>
                    <form>
                        <input type="text" placeholder="Nome" required/>
                        <input type="email" placeholder="Email" required/>
                        <input type="text" placeholder="CPF" maxLength={14} onChange={handleCPFChange}/>
                        
                        <input type="date" placeholder="dtNascimento" maxLength={10} onChange={handleDtNascimentoChange}/>
                    </form>

                </div>
            )}
        </div>
    )

}