import React from 'react';
import './CompreAgora.css';

import chapeuVerao from '../../img/chegada7.jpg';
import chapeuMasculino from '../../img/chegada6.jpg';
import vestidoFlorais from '../../img/product-3.jpg';
import setaDireita from '../../img/arrow-right-solid.svg';  

const produtos = [
  {
    titulo: 'Chapéus de verão',
    classe: 'box-chapeu-verao',
    imagem: chapeuVerao,
  },
  {
    titulo: 'Chapéus masculinos',
    classe: 'box-chapeu-masculino',
    imagem: chapeuMasculino,
  },
  {
    titulo: 'Vestidos florais',
    classe: 'box-vestido-florais',
    imagem: vestidoFlorais,
  },
];

const CompreAgora = () => {
  return (
    <section className="compre-agora">
      <div className="section-tres-img">
        {produtos.map((item, index) => (
          <div
            key={index}
            className={item.classe}
            style={{ backgroundImage: `url(${item.imagem})` }}
          >
            <div className="conteudo-central">
              <h5>{item.titulo}</h5>
              <div className="btn">
                Compre agora
                <img
                  className="svg-black"
                  src={setaDireita}
                  alt="seta direita"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompreAgora;