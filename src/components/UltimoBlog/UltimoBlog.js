import React from 'react';
import './UltimoBlog.css';

// Importando as imagens
import blog1 from '../../img/blog-1.jpg';
import blog2 from '../../img/blog-2.jpg';
import blog3 from '../../img/blog-3.jpg';

const UltimoBlog = () => {
  const posts = [
    {
      id: 1,
      imagem: blog1,
      alt: "Imagem blog 1",
      categoria: "Moda",
      data: "Setembro de 2021",
      titulo: "Nós rendendo Peixe à noite do mar à noite o disse ele dois",
      link: "#"
    },
    {
      id: 2,
      imagem: blog2,
      alt: "Imagem blog 2",
      categoria: "Viagem",
      data: "13 de junho de 2021",
      titulo: "A ave de terra arborizada dada move-se profundamente menos depois",
      link: "#"
    },
    {
      id: 3,
      imagem: blog3,
      alt: "Imagem blog 3",
      categoria: "Estilo de vida",
      data: "01 de junho de 2022",
      titulo: "Dado que Set estava sem Deus, dividia a regra Hath",
      link: "#"
    }
  ];

  return (
    <section className="box-ultimo-blog">
      <div className="titulo-ultimo-blog">
        <h6>NOSSO BLOG</h6>
        <h2>Últimas no blog</h2>
      </div>
      <div className="conteudo-ultimo-blog">
        {posts.map(post => (
          <article key={post.id} className="content-ultimo-blog">
            <img 
              className="img-ultimo-blog" 
              src={post.imagem} 
              alt={post.alt} 
            />
            <div className="detalhe-ultimo-blog">
              <p>
                <a href={post.link}>
                  {post.categoria} / {post.data}
                </a>
              </p>
              <h6>"{post.titulo}"</h6>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UltimoBlog;