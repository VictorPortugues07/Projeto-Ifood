import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
// galera em que instalar isso aqui no projeto npm install react-router-dom
const LoginSlideComponent = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const navigate = useNavigate();

  const handleSelect = (role) => {
    setSelectedRole(role);
    setShowLogin(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:8080/login', {
        params: { email: formData.email, senha: formData.senha, role: selectedRole }
      });
      if (response.data.success) {
        switch (selectedRole) {
          case 'cliente':
            navigate('/geral');
            break;
          case 'fornecedor':
            navigate('/fornecedor');
            break;
          case 'entregador':
            navigate('/entregas');
            break;
          default:
            break;
        }
      } else {
        alert('Credenciais inválidas.');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
    }
  };

  const handleCadastro = () => {
    navigate(`/${selectedRole}`);
  };

  return (
    <div className="login-container">
      <div className="role-selector">
        <button onClick={() => handleSelect('cliente')}>Sou Cliente</button>
        <button onClick={() => handleSelect('fornecedor')}>Sou Empresa</button>
        <button onClick={() => handleSelect('entregador')}>Sou Entregador</button>
      </div>

      <div className={`login-box ${showLogin ? 'slide-in' : ''}`}>
        <h2>Login</h2>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <button onClick={handleCadastro}>Cadastrar-se</button>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default LoginSlideComponent;