import React from 'react';
import { Link } from 'react-router-dom';
import "../Nav/Nav.css";
import Logo from '../../img/logo.png';

export function Nav() {
  return (
    <nav class="navbar navbar-expand-lg  menu">
      <div class="container-fluid menu">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div class="navbar-nav navbaixa">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Quemsomos" className="nav-link">
            Quem somos
          </Link>
          <Link to="/Pedidos" className="nav-link">
            Pedidos
          </Link>
          <Link to="/Cadastro" className="nav-link">
            Cadastro
          </Link>
          <Link to="/Contato" className="nav-link">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
