import React from 'react';
import CarrosselPromocao from '../../components/CarrosselPromocao/CarrosselPromocao';
import CompreAgora from '../../components/CompreAgora/CompreAgora';
import ComprePorCategoria from '../../components/ComprePorCategoria/ComprePorCategoria';
import CompreComDesconto from '../../components/CompreComDesconto/CompreComDesconto';
import NovasChegadas from '../../components/NovasChegadas/NovasChegadas';
import VeraoPerfeito from '../../components/VeraoPerfeito/VeraoPerfeito';
import UltimoBlog from '../../components/UltimoBlog/UltimoBlog';
import DetalheEntregas from '../../components/DetalheEntregas/DetalheEntregas';

const Home = () => {
  return (
    <div>
      <CarrosselPromocao />
      <CompreAgora />
      <ComprePorCategoria />
      <CompreComDesconto />
      <NovasChegadas />
      <VeraoPerfeito />
      <UltimoBlog />
      <DetalheEntregas />
    </div>
  );
};

export default Home;