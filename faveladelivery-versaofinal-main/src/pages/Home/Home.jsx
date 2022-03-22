/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Foto from "../../img/foto-bg-mulher.png";
import './Home.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className="divdomeio">
        <img src={Foto} className='banner' />
        <div className="texto">
          <div className="textoH1">
            <h1 className="titulo-banner">
              APOIE <span class="destaque">A SUA COMUNIDADE!</span> PEÇA DE UM
              COMERCIANTE LOCAL.
            </h1>
          </div>
          <div className="textoP">
            <p className='taxt'>
              O serviço ideal para sua necessidade de recebimento de seus
              produtos em sua comunidade em poucos cliques. Cadastre-se grátis e
              comece a usar agora mesmo. Preços direto no app. Peça em Segundos.
              Preço Justo. Conte com a gente! Cadastre-se agora!
            </p>

            <div>
              <Link to="/facebookfavela">
                <button className="btn">Saiba mais</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
