import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Geral from './components/Geral/Geral';
import Fornecedor from './pages/Fornecedor/Fornecedor';
import Entrega from './pages/entrega/Entrega';
import Login from './components/entrada/Login'; 

export default function AppRoutes() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/geral" element={<Geral />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fornecedor" element={<Fornecedor />} />
        <Route path="/entrega" element={<Entrega />} />
      </Routes>
    </Router>
  );
}
