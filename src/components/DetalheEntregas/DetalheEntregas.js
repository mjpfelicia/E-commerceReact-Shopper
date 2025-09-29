import React from 'react';
import './DetalheEntregas.css';


// Importando os ícones
import truckIcon from '../../img/truck-moving-solidcarro.svg';
import retweetIcon from '../../img/retweet-solidsetasetiqueta.svg';
import suitcaseIcon from '../../img/suitcase-rolling-solidsacola.svg';
import tagIcon from '../../img/tag-solid.svg';

const DetalheEntregas = () => {
  const beneficios = [
    {
      id: 1,
      icone: truckIcon,
      alt: "Ícone caminhão de entrega",
      titulo: "FREE SHIPPING",
      descricao: "De todos os pedidos acima de $100"
    },
    {
      id: 2,
      icone: retweetIcon,
      alt: "Ícone devoluções",
      titulo: "DEVOLUÇÕES GRATUITAS",
      descricao: "Devolva o dinheiro em 30 dias"
    },
    {
      id: 3,
      icone: suitcaseIcon,
      alt: "Ícone sacola",
      titulo: "COMPRAS SEGURAS",
      descricao: "Você está em boas mãos"
    },
    {
      id: 4,
      icone: tagIcon,
      alt: "Ícone etiqueta",
      titulo: "MAIS DE 10.000 ESTILOS",
      descricao: "Nós temos tudo que você precisa"
    }
  ];

  return (
    <section className="box-detalhe-entregas">
      <div className="content-entregas">
        {beneficios.map(beneficio => (
          <div key={beneficio.id} className="conteudo-entregas">
            <div className="img-detalhe-chegada">
              <img src={beneficio.icone} alt={beneficio.alt} />
            </div>
            <div className="detalhe-conteudo-entregas">
              <h6>{beneficio.titulo}</h6>
              <p>{beneficio.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetalheEntregas;