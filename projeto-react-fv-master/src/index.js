import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import Quemsomos from './pages/Quemsomos/Quemsomos';
import Pedidos from './pages/Pedidos/Pedidos';
import Cadastro from './pages/Cadastro/Cadastro';
import Contato from './pages/Contato/Contato';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Quemsomos" element={<Quemsomos />}></Route>
        <Route path="/Pedidos" element={<Pedidos />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
