import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // ← ADICIONAR ESTA IMPORT
import "./Header.css";
import userIcon from '../../img/user-regular.svg';
import commentIcon from '../../img/comment-regular.svg';
import heartIcon from '../../img/heart-regular.svg';
import cartIcon from '../../img/shopping-cart-solid.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);

  // Fecha dropdowns quando clica fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Alterna menu mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Fecha dropdowns quando abre/fecha menu mobile
    if (!menuOpen) {
      setOpenDropdown(null);
    }
  };

  // Alterna dropdowns
  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  // Fecha menu mobile quando um link é clicado
  const handleLinkClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  // Dados para os dropdowns principais
  const mainDropdowns = [
    {
      name: "home",
      label: "Home",
      items: [
        "Main Home", "Fashion Home", "Furniture Home", "Electronics Home",
        "Beauty Home", "Kids Home", "Sport Home", "Book Store",
        "Music Store", "Flower Shop", "Single Product"
      ]
    },
    {
      name: "catalog",
      label: "Catalog",
      items: [
        "Shop Grid", "Shop List", "Shop Right Sidebar", "Product Details",
        "Product Variable", "Product Grouped", "Product Affiliate"
      ]
    },
    {
      name: "shop",
      label: "Shop",
      items: ["My Account", "Cart", "Checkout", "Wishlist", "Order Tracking"]
    },
    {
      name: "pages",
      label: "Pages",
      items: [
        "About Us", "Contact Us", "Login & Register", "FAQ", "404 Page",
        "Compare", "Wishlist", "Order Tracking"
      ]
    },
    {
      name: "blog",
      label: "Blog",
      items: [
        "Blog Left Sidebar", "Blog Right Sidebar", "Blog Full Width", "Blog Details"
      ]
    }
  ];

  // Dados para dropdowns utilitários
  const utilityDropdowns = [
    {
      name: "country",
      label: "País",
      items: ["United States", "Canada", "Brasil"]
    },
    {
      name: "currency",
      label: "USD",
      items: ["CAD", "BRL", "EUR"]
    },
    {
      name: "language",
      label: "English",
      items: ["Inglês", "Francs", "German"]
    }
  ];

  // Ícones com navegação
  const headerIcons = [
    { 
      icon: userIcon, 
      alt: "User", 
      to: "/login", 
      title: "Minha Conta" 
    },
    { 
      icon: commentIcon, 
      alt: "Comment", 
      to: "/contato", 
      title: "Contato" 
    },
    { 
      icon: heartIcon, 
      alt: "Heart", 
      to: "/favoritos", 
      title: "Favoritos" 
    },
    { 
      icon: cartIcon, 
      alt: "Shopping Cart", 
      to: "/carrinho", 
      title: "Carrinho de Compras" 
    }
  ];

  return (
    <header ref={headerRef}>
      {/* Banner superior */}
      <div className="logo-happy">
        <p className="titulo-happy">⚡️ OFERTAS DE FÉRIAS FELIZES EM TUDO ⚡️</p>
      </div>

      {/* Ícone menu mobile */}
      <div 
        className={`menu-icon ${menuOpen ? "change" : ""}`} 
        onClick={toggleMenu} 
        role="button" 
        tabIndex={0} 
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        aria-label="Toggle menu"
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {/* Menu principal */}
      <nav className={`menu ${menuOpen ? "menu-display" : ""}`} id="menu-mobile">
        <ul>
            
          

          {/* Dropdowns principais */}
          {mainDropdowns.map((dropdown) => (
            <li key={dropdown.name}>
              <div className="dropdown">
                <button
                  className="dropbtn hover-red"
                  onClick={() => toggleDropdown(dropdown.name)}
                  aria-expanded={openDropdown === dropdown.name}
                >
                  {dropdown.label}
                </button>
                <div className={`dropdown-content ${openDropdown === dropdown.name ? "show" : ""}`}>
                  {dropdown.items.map((item, index) => (
                    <a 
                      key={index} 
                      href="#!" 
                      onClick={handleLinkClick}
                      onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}

          {/* Docs (sem dropdown) */}
          <li>
            <div className="dropdown">
              <button className="dropbtn hover-red">Docs</button>
            </div>
          </li>

          {/* Logo Shopper */}
          <li>
            <div className="titulo-shopper">Shopper.</div>
          </li>

          {/* Dropdowns utilitários */}
          {utilityDropdowns.map((dropdown) => (
            <li key={dropdown.name}>
              <div className="dropdown">
                <button
                  className="dropbtn"
                  onClick={() => toggleDropdown(dropdown.name)}
                  aria-expanded={openDropdown === dropdown.name}
                >
                  {dropdown.label} <span className="arrow"></span>
                </button>
                <div className={`dropdown-content ${openDropdown === dropdown.name ? "show" : ""}`}>
                  {dropdown.items.map((item, index) => (
                    <a 
                      key={index} 
                      href="#!"
                      onClick={handleLinkClick}
                      onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}

          {/* Ícones com navegação - ATUALIZADO */}
          <li>
            <div className="icon-header icon-img">
              {headerIcons.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={handleLinkClick}
                  title={item.title}
                  className="icon-link"
                >
                  <img 
                    src={item.icon} 
                    alt={item.alt}
                  />
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;