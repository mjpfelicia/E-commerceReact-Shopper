import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarrosselPromocao from "./components/CarrosselPromocao/CarrosselPromocao";
import CompreAgora from "./components/CompreAgora/CompreAgora";
import ComprePorCategoria from "./components/ComprePorCategoria/ComprePorCategoria";
import CompreComDesconto from "./components/CompreComDesconto/CompreComDesconto";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NovasChegadas from "./components/NovasChegadas/NovasChegadas";
import VeraoPerfeito from "./components/VeraoPerfeito/VeraoPerfeito";
import UltimoBlog from "./components/UltimoBlog/UltimoBlog";
import DetalheEntregas from "./components/DetalheEntregas/DetalheEntregas";


function App() {
  return (
    <div>
      <Header />
       <CarrosselPromocao />
       <CompreAgora />
       <ComprePorCategoria />
       <CompreComDesconto />
       <NovasChegadas />
       <VeraoPerfeito />
       <UltimoBlog />
       <DetalheEntregas />
      <Footer/>
    </div>
  );
}

export default App;
