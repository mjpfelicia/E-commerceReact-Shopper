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
                <a href="#!">Main Home</a>
                <a href="#!">Fashion Home</a>
                <a href="#!">Furniture Home</a>
                <a href="#!">Electronics Home</a>
                <a href="#!">Beauty Home</a>
                <a href="#!">Kids Home</a>
                <a href="#!">Sport Home</a>
                <a href="#!">Book Store</a>
                <a href="#!">Music Store</a>
                <a href="#!">Flower Shop</a>
                <a href="#!">Single Product</a>
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
                <a href="#!">Shop Grid</a>
                <a href="#!">Shop List</a>
                <a href="#!">Shop Right Sidebar</a>
                <a href="#!">Product Details</a>
                <a href="#!">Product Variable</a>
                <a href="#!">Product Grouped</a>
                <a href="#!">Product Affiliate</a>
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
                <a href="#!">My Account</a>
                <a href="#!">Cart</a>
                <a href="#!">Checkout</a>
                <a href="#!">Wishlist</a>
                <a href="#!">Order Tracking</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn hover-red"
                onClick={() => toggleDropdown("pages")}
              >
                Pages
              </button>
              <div className={`dropdown-content ${openDropdown === "pages" ? "show" : ""}`}>
                <a href="#!">About Us</a>
                <a href="#!">Contact Us</a>
                <a href="#!">Login & Register</a>
                <a href="#!">FAQ</a>
                <a href="#!">404 Page</a>
                <a href="#!">Compare</a>
                <a href="#!">Wishlist</a>
                <a href="#!">Order Tracking</a>
                
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
                <a href="#!">Blog Left Sidebar</a>
                <a href="#!">Blog Right Sidebar</a>
                <a href="#!">Blog Full Width</a>
                <a href="#!">Blog Details</a>
                
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
                País <span className="arrow"></span>
              </button>
              <div className={`dropdown-content ${openDropdown === "country" ? "show" : ""}`}>
                <a href="#!">United States</a>
                <a href="#!">Canada</a>
                <a href="#!">Brasil</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => toggleDropdown("currency")} >
                USD <span className="arrow"></span>
              </button>
              <div className={`dropdown-content ${openDropdown === "currency" ? "show" : ""}`}>
                <a href="#!">
                  CAD
                </a>
                <a href="#!">
                  BRL
                </a>
                <a href="#!">
                  EUR
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropbtn"
                onClick={() => toggleDropdown("language")}  >
                English <span className="arrow"></span>
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
