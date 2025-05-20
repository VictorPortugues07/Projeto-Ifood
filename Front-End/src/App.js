import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import CadastroCliente from './pages/CadastroCliente'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CadastroCliente/>
    </div>
  );
}

export default App;
