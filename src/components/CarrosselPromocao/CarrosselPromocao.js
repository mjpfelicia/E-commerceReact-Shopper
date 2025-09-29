import React, { useState, useEffect } from "react";
import "./CarrosselPromocao.css";
import img1 from "../../img/corrosel11.jpg";
import img2 from "../../img/carrosel1.jpg";
import img3 from "../../img/carrosel22.jpg";
import setaDireita from "../../img/arrow-right-solid.svg";

const slides = [
  {
    imagem: img1,
    titulo: "Liquidação de verão",
    desconto: "-70%",
    subtitulo: "Com Código Promocional CN67EW*",
    botaoTexto: "Compre agora",
  },
  {
    imagem: img2,
    titulo: "Promoção Outono",
    desconto: "-50%",
    subtitulo: "Use o código OUTONO50",
    botaoTexto: "Confira",
  },
  {
    imagem: img3,
    titulo: "Novidades Primavera",
    desconto: "-30%",
    subtitulo: "Descontos fresquinhos pra você",
    botaoTexto: "Saiba mais",
  },
];

const CarrosselPromocao = () => {
  const [index, setIndex] = useState(0);

  // Troca automática a cada 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carrossel-container">
      {slides.map(({ imagem, titulo, desconto, subtitulo, botaoTexto }, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "ativo" : ""}`}
          style={{ backgroundImage: `url(${imagem})` }}
        >
          <div className="conteudo-slide">
            <h1 className="titulo-carrosel">{titulo}</h1>
            <h2 className="titulo2-carrosel">{desconto}</h2>
            <h5 className="titulo3-carrosel">{subtitulo}</h5>
            <button className="btn-carrosel">
              {botaoTexto}
              <img src={setaDireita} alt="seta" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarrosselPromocao;
