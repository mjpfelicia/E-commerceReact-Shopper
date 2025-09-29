import React from 'react';
import './CompreComDesconto.css';
import setaDireita from '../../img/arrow-right-solid.svg';

const produtosDesconto = [
    {
        nome: 'Calça Cortadas',
        precoOriginal: '$99.00',
        precoDesconto: '$59.00',
    },
    {
        nome: 'Tênis de couro',
        precoOriginal: '$99.00',
        precoDesconto: '$59.00',
    },
];

const CompreComDesconto = () => {
    return (
        <section className="box-compre-com-desconto">
            {produtosDesconto.map((produto, index) => (
                <div key={index} className={`box${index + 1}-desconto`}>
                    <div>
                        <div className="selo-desconto">
                            <p className="detalhe-desc">
                                <del>{produto.precoOriginal}</del>
                            </p>
                            <span className="desc-detalhe">{produto.precoDesconto}</span>
                        </div>
                    </div>
                    <div className="produto-desconto">
                        <h4>{produto.nome}</h4>
                        <div className="btn">
                            Compre agora
                            <img className="svg-black" src={setaDireita} alt="seta direita" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CompreComDesconto;