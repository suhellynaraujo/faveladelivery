import React from 'react';
import styles from './Quemsomos.css';
import { Player } from 'video-react';
import Footer from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';

function Quemsomos() {
  return (
    <>
      <Nav />
      <div className={styles.quemsomosprincipal}>
        <h1 className={styles.titulos}>Quem somos</h1>
        <p className={styles.textoquemsomos}>
          Somos um grupo de alunos da ONG Recode Pro empenhados e em
          desenvolvimento, buscando evolução constante e a primeira oportunidade
          no mercado de trabalho na área de tecnologia, especificamente
          Full-Stack. Nosso projeto é voltado para a inclusão de mulheres
          moradoras de comunidades carentes que estão de certa forma excluídas
          por não conseguirem receber suas encomendas dentro de suas
          comunidades, visto que muitas empresas não conseguem adentrar nas
          comunidades e entregar os produtos dos mesmos. O objetivo é facilitar
          a comercialização de produtos e serviços dentro destas comunidades,
          focando especificamente mulheres que residem dentro destas
          comunidades.
        </p>
        <section>
          <Player
            playsInLine
            poster="/img/ft favela.jpg"
            src="https://youtu.be/KsF-X2kKFCU"
          />
        </section>
        <a href="../../Contato.jsx">
          <button type="submit">Saiba Mais</button>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Quemsomos;
