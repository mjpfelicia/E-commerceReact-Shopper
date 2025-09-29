import React from 'react';
import Slider from 'react-slick';
import './ComprePorCategoria.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imagens
import prod1 from '../../img/prod1.jpg';
import prod2 from '../../img/prod2.jpg';
import prod3 from '../../img/prod3.jpg';
import prod4 from '../../img/prod4.jpg';
import prod5 from '../../img/prod5.jpg';
import prod6 from '../../img/prod6.jpg';
import prod7 from '../../img/prod7.jpg';

const categorias = [
    { nome: 'Vestidos', imagem: prod1, quantidade: 58 },
    { nome: 'Tops', imagem: prod2, quantidade: 58 },
    { nome: 'Camisetas', imagem: prod3, quantidade: 27 },
    { nome: 'Sapatos', imagem: prod4, quantidade: 64 },
    { nome: 'Jeans', imagem: prod5, quantidade: 44 },
    { nome: 'Moletons', imagem: prod6, quantidade: 11 },
    { nome: 'Jaquetas', imagem: prod7, quantidade: 9 },
];

const ComprePorCategoria = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="compre-por-categoria">
            <div className="header-categoria">
                <h2 className="titulo-categoria">Compre por categoria</h2>
                <div className="link-categoria">
                    <a className="link-mulher" href="#">Mulheres</a>
                    <a className="links" href="#">Homens</a>
                    <a className="links" href="#">Crianças</a>
                </div>
            </div>

            <div className="box-categorias">
                <Slider {...settings}>
                    {categorias.map((item, index) => (
                        <div key={index} className="item">
                            <img src={item.imagem} alt={item.nome} />

                            <div className="descricao-item-categoria">
                                <h6>{item.nome}</h6>
                                <small className="item-small">({item.quantidade})</small>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ComprePorCategoria;