# Shopper - E-commerce React

Este projeto é um e-commerce desenvolvido em React, criado com [Create React App](https://github.com/mjpfelicia).

![Texto alternativo da imagem](./src/img/tela.png)

## Funcionalidades

- **Catálogo de produtos**: Visualize produtos em um layout de grade ou carrossel.
- **Novas chegadas**: Carrossel de produtos recém-adicionados.
- **Seção de looks**: Destaque de combinações de produtos (verão perfeito).
- **Blog**: Últimas postagens do blog.
- **Footer informativo**: Links úteis, newsletter e redes sociais.

## Tecnologias Utilizadas

- React
- CSS3
- React Icons (para ícones)
- Create React App (ambiente de desenvolvimento)

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:
   \`\`\`bash
   git clone <URL_DO_REPOSITORIO>
   \`\`\`

2. Entre no diretório do projeto:
   \`\`\`bash
   cd ecommerce
   \`\`\`

3. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

4. Execute o projeto em modo de desenvolvimento:
   \`\`\`bash
   npm start
   \`\`\`

5. Abra [http://localhost:3000](http://localhost:3000) para visualizar no browser.

## Scripts Disponíveis

No diretório do projeto, você pode rodar:

### \`npm start\`

Roda o app em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no browser.

A página irá recarregar se você fizer edições.\
Você também verá erros de lint no console.

### \`npm test\`

Inicia o executor de testes no modo interativo.\
Veja a seção sobre [executando testes](https://github.com/mjpfelicia) para mais informações.

### \`npm run build\`

Constroi o app para produção na pasta \`build\`.\
Ele empacota corretamente o React em modo de produção e otimiza a build para melhor performance.

A build é minificada e os nomes dos arquivos incluem hashes.\
Seu app está pronto para ser deployado!

Veja a seção sobre [deploy](https://github.com/mjpfelicia) para mais informações.

### \`npm run eject\`

**Nota: esta é uma operação irreversível. Uma vez feito \`eject\`, você não pode voltar!**

Se você não estiver satisfeito com as ferramentas de build e configurações, você pode fazer \`eject\` a qualquer momento. Este comando removerá a dependência de build do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e dependências transitivas (webpack, Babel, ESLint, etc) direto para o seu projeto, para que você tenha controle total sobre eles. Todos os comandos, exceto \`eject\`, ainda funcionarão, mas apontarão para os scripts copiados, então você pode ajustá-los. Neste momento, você está por conta própria.

Você nunca é obrigado a usar \`eject\`. O conjunto de funcionalidades curadas é adequado para deploys pequenos e médios, e você não deve se sentir obrigado a usar esta funcionalidade. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse customizá-la quando estiver pronto.

## Estrutura de Pastas

\`\`\`
src/
  components/
    NovasChegadas/       # Carrossel de novos produtos
    VeraoPerfeito/       # Seção de looks de verão
    UltimoBlog/          # Últimas postagens do blog
    DetalheEntregas/     # Seção de benefícios (frete, devoluções, etc.)
    Footer/              # Rodapé com links e newsletter
    img                  # Imagens do projeto
    icons/               # Ícones em SVG
  App.js                 # Componente principal
  index.js               # Ponto de entrada
\`\`\`

## Status do Projeto

🚧 Em desenvolvimento 🚧

## Próximos Passos

- [ ] Implementar carrinho de compras
- [ ] Integração com API de produtos
- [ ] Páginas de produto individual
- [ ] Sistema de checkout
- [ ] Autenticação de usuários

 - ## mjpfelicia