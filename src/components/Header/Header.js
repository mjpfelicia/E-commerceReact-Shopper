import React, { useState } from "react";
import "./Header.css";
import userIcon from '../../img/user-regular.svg';
import commentIcon from '../../img/comment-regular.svg';
import heartIcon from '../../img/heart-regular.svg';
import cartIcon from '../../img/shopping-cart-solid.svg';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Alterna menu mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Alterna dropdowns
  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <header>
      <header>
        <div className="logo-happy">
          <p className="titulo-happy">⚡️ OFERTAS DE FÉRIAS FELIZES EM TUDO ⚡️</p>
        </div>
      </header>

      {/* Ícone menu mobile */}
      <a href="#!" className="icon" onClick={toggleMenu}>
        <img className="img-mobile" src="./img/bars-solid.svg" alt="menu" />
      </a>

      {/* Menu */}
      <nav className={`menu ${menuOpen ? "menu-display" : ""}`} id="menu-mobile">
        <ul>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn hover-red"
                onClick={() => toggleDropdown("home")}
              >
                Home
              </button>
              <div className={`dropdown-content ${openDropdown === "home" ? "show" : ""}`}>
                <a href="#!">Classic</a>
                <a href="#!">Fashion</a>
                <a href="#!">Boxed</a>
                <a href="#!">Simple</a>
                <a href="#!">Asymmetric</a>
                <a href="#!">Sidenav</a>
                <a href="#!">Landing</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn hover-red"
                onClick={() => toggleDropdown("catalog")}
              >
                Catalog
              </button>
              <div className={`dropdown-content ${openDropdown === "catalog" ? "show" : ""}`}>
                <a href="#!">Mulheres</a>
                <a href="#!">Confecções</a>
                <a href="#!">Sapato</a>
                <a href="#!">Vestidos</a>
                <a href="#!">Bolsas</a>
                <a href="#!">Acessórios</a>
                <a href="#!">Óculos escuros</a>
                <a href="#!">Jeans</a>
                <a href="#!">Botas</a>
                <a href="#!">Jóia</a>

                <div className="conte-drop-catalago">
                  <a href="#!">Homens</a>
                  <a href="#!">Confecções</a>
                  <a href="#!">Sapato</a>
                  <a href="#!">Bolsas</a>
                  <a href="#!">Acessórios</a>
                  <a href="#!">Vestidos</a>
                  <a href="#!">Óculos escuros</a>
                  <a href="#!">Jeans</a>
                  <a href="#!">Tênis</a>
                  <a href="#!">Watche</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn hover-red"
                onClick={() => toggleDropdown("shop")}
              >
                Shop
              </button>
              <div className={`dropdown-content ${openDropdown === "shop" ? "show" : ""}`}>
                <a href="#!">United</a>
                <a href="#!">Canada</a>
                <a href="#!">Brasil</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => toggleDropdown("pages")}
              >
                Pages
              </button>
              <div className={`dropdown-content ${openDropdown === "pages" ? "show" : ""}`}>
                <a href="#!">About</a>
                <a href="#!">Contact Us</a>
                <a href="#!">Store Locator</a>
                <a href="#!">FAQ</a>
                <a href="#!">Coming Soon</a>
                <a href="#!">404</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn hover-red"
                onClick={() => toggleDropdown("blog")}
              >
                Blog
              </button>
              <div className={`dropdown-content ${openDropdown === "blog" ? "show" : ""}`}>
                <a href="#!">Docs</a>
                <a href="#!">Blog Post</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn hover-red">Docs</button>
            </div>
          </li>
          <li>
            <div className="titulo-shopper">Shopper.</div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => toggleDropdown("country")}
              >
                United States <span className="arrow"></span>
              </button>
              <div className={`dropdown-content ${openDropdown === "country" ? "show" : ""}`}>
                <a href="#!">United</a>
                <a href="#!">Canada</a>
                <a href="#!">Brasil</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => toggleDropdown("currency")}
              >
                USD <span className="arrow"></span>
              </button>
              <div className="dropdown-content">
                <a href="#!">USD</a>
                <a href="#!">EUR</a>
                <a href="#!">GBP</a>
              
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => toggleDropdown("language")}
              >
                EN <span className="arrow"></span>
              </button>
              <div className={`dropdown-content ${openDropdown === "language" ? "show" : ""}`}>
                <a href="#!">Inglês</a>
                <a href="#!">Francs</a>
                <a href="#!">German</a>
              </div>
            </div>
          </li>
          <li>
            <div className="icon-header icon-img">
              <img src={userIcon} alt="User" />
              <img src={commentIcon} alt="Comment" />
              <img src={heartIcon} alt="Heart" />
              <img src={cartIcon} alt="Shopping Cart" />


            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
