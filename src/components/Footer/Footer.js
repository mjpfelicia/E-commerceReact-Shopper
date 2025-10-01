import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookSquare, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email inscrito:', email);
    alert('Obrigado por se inscrever!');
    setEmail('');
  };

  const redesSociais = [
    { icon: <FaFacebookSquare />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaMedium />, href: "https://medium.com", label: "Medium" }
  ];

  const colunas = [
    {
      titulo: "APOIO, SUPORTE",
      links: [
        { texto: "Contate-Nos", href: "#" },
        { texto: "FAQs", href: "#" },
        { texto: "Guia de tamanho", href: "#" },
        { texto: "Frete e Devoluções", href: "#" }
      ]
    },
    {
      titulo: "FAZER COMPRAS",
      links: [
        { texto: "Compras masculinas", href: "#" },
        { texto: "Compras femininas", href: "#" },
        { texto: "Compras para crianças", href: "#" },
        { texto: "Descontos", href: "#" }
      ]
    },
    {
      titulo: "EMPRESA",
      links: [
        { texto: "Nossa história", href: "#" },
        { texto: "Carreiras", href: "#" },
        { texto: "Termos e Condições", href: "#" },
        { texto: "Política de privacidade e cookies", href: "#" }
      ]
    },
    {
      titulo: "CONTATO",
      items: [
        { texto: "1-202-555-0105" },
        { texto: "1-202-555-0106" },
        { texto: "help@shopper.com", href: "mailto:help@shopper.com" }
      ]
    }
  ];

  return (
    <footer className="box-footer_1">
      <div className="content-footer1">
        <h5>Quer ideias e guloseimas de estilo?</h5>
        <form className="conteudo-footer_1" onSubmit={handleSubmit}>
          <div className="nav-input">
            <input
              type="email"
              placeholder="Digite seu email*"
              id="btn_email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="nav-button">
            <button type="submit" className="btn-footer_1">
              Inscrever
            </button>
          </div>
        </form>
      </div>

      <div className="box-coluna-footer_1">
        <div className="content-coluna-icons">
          <h3>Shopper.</h3>
          <nav aria-label="Redes sociais">
            {redesSociais.map((rede, index) => (
              <a
                key={index}
                href={rede.href}
                aria-label={rede.label}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social"
              >
                {rede.icon}
              </a>
            ))}
          </nav>
        </div>

        {colunas.map((coluna, index) => (
          <div key={index} className="content-coluna-footer">
            <h3>{coluna.titulo}</h3>
            <ul className="link-coluna-footer1">
              {coluna.links ? (
                coluna.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.texto}</a>
                  </li>
                ))
              ) : (
                coluna.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.href ? (
                      <a href={item.href}>{item.texto}</a>
                    ) : (
                      item.texto
                    )}
                  </li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;