// ... outras imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import CartPage from './pages/CartPage/CartPage';
// Novas imports
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Wishlist from './pages/Wishlist/Wishlist';

export default
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductList />} />
          <Route path="/carrinho" element={<CartPage />} />
          {/* Novas rotas */}
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/favoritos" element={<Wishlist />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}