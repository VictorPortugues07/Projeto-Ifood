import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Geral from './pages/Geral';
import Fornecedor from './pages/Fornecedor';
import Entregas from './pages/Entregas';
import Cliente from './pages/Cliente';
import Geral from './components/entrada/Login'; 

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/geral" element={<Geral />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fornecedor" element={<Fornecedor />} />
        <Route path="/entregas" element={<Entregas />} />
        <Route path="/cliente" element={<Cliente />} />
      </Routes>
    </Router>
  );
}
