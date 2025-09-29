import React, { useState, useRef, useEffect } from 'react';
import './NovasChegadas.css';

// Importando as imagens
import chegada1 from '../../img/chegada1.jpg';
import chegada2 from '../../img/chegada2.jpg';
import chegada3 from '../../img/chegada3.jpg';
import chegada4 from '../../img/chegada4.jpg';
import chegada5 from '../../img/chegada5.jpg';
import chegada6 from '../../img/chegada6.jpg';
import chegada7 from '../../img/chegada7.jpg';
import heartRegular from '../../img/heart-regular.svg';
import heartSolid from '../../img/heart-regular.svg';

const NovasChegadas = () => {
  const [produtos] = useState([
    {
      id: 1,
      nome: "Vestido de algodão floral",
      imagem: chegada1,
      preco: "$40.00"
    },
    {
      id: 2,
      nome: "Bolsa de camurça",
      imagem: chegada2,
      precoOriginal: "$85.00",
      precoPromocional: "$49.00"
    },
    {
      id: 3,
      nome: "Camisa estampada de algodão",
      imagem: chegada3,
      preco: "$25.00"
    },
    {
      id: 4,
      nome: "Tênis de couro",
      imagem: chegada4,
      preco: "$40.00"
    },
    {
      id: 5,
      nome: "Outro vestido fino",
      imagem: chegada5,
      preco: "$99.00"
    },
    {
      id: 6,
      nome: "Boné de baseball",
      imagem: chegada6,
      preco: "$10.00"
    },
    {
      id: 7,
      nome: "Tênis de couro",
      imagem: chegada7,
      preco: "$19.00"
    }
  ]);

  const [favoritos, setFavoritos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const carouselRef = useRef(null);

  // Ajustar número de itens baseado no tamanho da tela
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const toggleFavorito = (id) => {
    setFavoritos(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev >= produtos.length - itemsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev <= 0 ? produtos.length - itemsToShow : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <div className="box-novas-chegadas">
        <h1 className="titulo-chegada">Novas chegadas</h1>
        <div className="content-novas-chegadas">
          <div className="carousel-container">
            <button 
              className="carousel-nav carousel-prev" 
              onClick={prevSlide}
              aria-label="Produtos anteriores"
            >
              ‹
            </button>
            
            <div className="carousel-wrapper" ref={carouselRef}>
              <div 
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
                }}
              >
                {produtos.map(produto => (
                  <div 
                    key={produto.id} 
                    className="carousel-slide"
                    style={{
                      minWidth: `${100 / itemsToShow}%`
                    }}
                  >
                    <div className="conteudo-novas-chegadas">
                      <button 
                        className="svg-heart"
                        onClick={() => toggleFavorito(produto.id)}
                        aria-label="Adicionar aos favoritos"
                      >
                        <img 
                          className="img-heart"
                          src={
                            favoritos.includes(produto.id)
                              ? heartSolid
                              : heartRegular
                          }
                          alt="ícone de coração"
                        />
                      </button>
                      <img 
                        className="img-chegada"
                        src={produto.imagem}
                        alt={produto.nome}
                      />
                      <div className="descricao-chegada">
                        <a className="detalhe-chegada" href="#">
                          {produto.nome}
                        </a>
                        {produto.temOpcoes ? null : produto.precoPromocional ? (
                          <span className="desc-detalhe-preco">
                            <del>{produto.precoOriginal}</del> {produto.precoPromocional}
                          </span>
                        ) : (
                          <span>{produto.preco}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="carousel-nav carousel-next" 
              onClick={nextSlide}
              aria-label="Próximos produtos"
            >
              ›
            </button>
          </div>

          {/* Indicadores */}
          <div className="carousel-dots">
            {Array.from({ length: Math.ceil(produtos.length / itemsToShow) }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovasChegadas;