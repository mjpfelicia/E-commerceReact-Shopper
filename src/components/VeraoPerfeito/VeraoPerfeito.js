import React, { useState } from 'react';
import './VeraoPerfeito.css';
// Importando as imagens
import produc1 from '../../img/produc1.jpg';
import produc1_1 from '../../img/produc1-1.jpg';
import lookPerfeito from '../../img/look-perfeito.jpg';
import lookPerfeito1 from '../../img/look-perfeito1.jpg';
import lookHomem from '../../img/look-homem.jpg';
import lookHomem1 from '../../img/look-homem-1.jpg';
import angleLeft from '../../img/angle-left-solid black.svg';
import angleRight from '../../img/angle-right-solid.svg';
import heartRegular from '../../img/heart-regular.svg';
import heartSolid from '../../img/heart-regular.svg';




const VeraoPerfeito = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [favoritos, setFavoritos] = useState([]);

    const slides = [
        {
            id: 1,
            imagemGrande: produc1,
            imagemPequena: produc1_1,
            titulo: "Top de algodão texturizado",
            precoOriginal: "$90.00",
            precoPromocional: "$69.00",
            temPromocao: true
        },
        {
            id: 2,
            imagemGrande: lookPerfeito,
            imagemPequena: lookPerfeito1,
            titulo: "Bolsa animal crossbody",
            preco: "$59.00",
            temPromocao: false
        },
        {
            id: 3,
            imagemGrande: lookHomem,
            imagemPequena: lookHomem1,
            titulo: "Jaqueta com bolsos",
            preco: "$70.00",
            temPromocao: false
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const toggleFavorito = (slideId) => {
        setFavoritos(prev =>
            prev.includes(slideId)
                ? prev.filter(id => id !== slideId)
                : [...prev, slideId]
        );
    };

    return (
        <section className="box-verao-perfeito">
            <div className="btn-left">
                <img
                    className="image-btn-left"
                    onClick={prevSlide}
                    src={angleLeft}
                    alt="Seta esquerda"
                />
            </div>

            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`box-look-perfeito look-slide${index + 1}`}
                    style={{ display: index === currentSlide ? 'flex' : 'none' }}
                >
                    <div className="conteudo-img-grd">
                        <img
                            className="img-top-grd"
                            src={slide.imagemGrande}
                            alt={slide.titulo}
                        />
                    </div>
                    <div className="conteudo-look">
                        <div className="titulo-look-perfeito">
                            <h6>VERÃO PERFEITO</h6>
                            <h3>Look dias de verão</h3>
                        </div>
                        <div className="conteudo-top-png">
                            <button
                                className="svg-heart-look"
                                onClick={() => toggleFavorito(slide.id)}
                                aria-label="Favoritar look"
                            >
                                <img
                                    className="img-heart"
                                    src={favoritos.includes(slide.id) ? heartSolid : heartRegular}
                                    alt="ícone de coração"
                                />
                            </button>
                            <img
                                className="img-top-png"
                                src={slide.imagemPequena}
                                alt={slide.titulo}
                            />
                        </div>
                        <div className="detalhe-look-perfeito">
                            <a className="link-look" href="#">{slide.titulo}</a>
                            {slide.temPromocao ? (
                                <>
                                    <span className="link-look-span">{slide.precoOriginal}</span>
                                    <small className="look-prom">{slide.precoPromocional}</small>
                                </>
                            ) : (
                                <span className="link-look-bolsa">{slide.preco}</span>
                            )}
                        </div>
                        <div className="dot-detalhe">
                            {slides.map((_, dotIndex) => (
                                <span
                                    key={dotIndex}
                                    className={`dot ${dotIndex === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(dotIndex)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <div className="btn-right">
                <img
                    className="image-btn-right"
                    onClick={nextSlide}
                    src={angleRight}
                    alt="Seta direita"
                />
            </div>
        </section>
    );
};

export default VeraoPerfeito;