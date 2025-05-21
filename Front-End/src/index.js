import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Geral/Navbar';
{/*import CadastroCliente from './pages/CadastroCliente';*/}
import BarraDePesquisa from './components/Geral/BarraDePesquisa';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <BarraDePesquisa/>
      {/*<CadastroCliente />*/}
      <p style={{marginTop: "20px"}}></p>
      

      <header className="header">
        <div className="logo"></div>
        <nav className="nav">
          <a href="#">Hamburgueria</a>
          <a href="#">Restaurante Japonês</a>
          <a href="#">Pizzaria</a>
        </nav>
        <button className="login-button">Entrar ou Cadastrar</button>
      </header>

      <section className="hero">
        <h1>Praticidade que transforma sua rotina</h1>
        <p>
          Receba o que você precisa, onde estiver.{' '}
          <span className="highlight">Simples assim.</span>
        </p>
        <div className="search">
          <input type="text" placeholder="Digite sua localização" />
          <button>Buscar</button>
        </div>

        <div className="categories">
          <div className="category orange"></div>
          <div className="category green"></div>
          <div className="category yellow"></div>
          <div className="category red"></div>
          <div className="category purple"></div>
        </div>
      </section>

      <section className="section">
        <h2>🍔 Top Hamburgueria</h2>
        <div className="card-list">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card"></div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>🍣 Top Restaurante Japonês</h2>
        <div className="card-list">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="card"></div>
          ))}
        </div>
      </section>

      <section className="banners">
        <div className="banner"></div>
        <div className="banner"></div>
      </section>

      <footer className="footer">
        <div className="footer-logo"></div>
        <p>© Copyright 2024 - gFood™ - Todos os direitos reservados</p>
        <div className="footer-links">
          <a href="#">Termos e condições de uso</a>
          <a href="#">Privacidade</a>
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
