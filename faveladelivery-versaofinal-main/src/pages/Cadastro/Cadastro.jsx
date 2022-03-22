import React from "react";
import { Nav } from "../../components/Nav/Nav";
import "./Cadastro.css";
import Empreendedor from "../../img/ft-empreendedor.png";
import Entregador from "../../img/ft-entregador.png";
import Cliente from "../../img/ft-cliente.png";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <>
      <Nav />
      <main className="escolherPerfil" >
        <div >
          <h2 className="escolherPerfilTitulo">Cadastro</h2>
          <p className="escolherPerfilParagrafo">Escolha seu segmento e faça seu cadastro.</p>
          <div className="boxEscolherPerfil">
            <div className="boxEcolherPerImg">
              <img src={Empreendedor} alt="" />
              <h4 className="escolherPerfilTitulo">Empreendedor</h4>
              <Link to="/html/cadastroempreendedor.html">
                <button type="submit">
                  Cadastrar
                </button>
              </Link>
            </div>
            <div className="boxEcolherPerImg">
              <img src={Entregador} alt="" />
              <h4 className="escolherPerfilTitulo">Entregador</h4>
              <Link to="/html/cadastroentregador.html">
                <button type="submit">
                  Cadastrar
                </button>
              </Link>
            </div>
            <div className="boxEcolherPerImg">
              <img src={Cliente} alt="" />
              <h4 className="escolherPerfilTitulo">Cliente</h4>
              <Link to="/html/cadastroclientes.html">
                <button type="submit">
                  Cadastrar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </>
  );
}

export default Cadastro;
