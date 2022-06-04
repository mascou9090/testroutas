import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Head } from '../Head/Head';

const moveLeft = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }

  to {
    transform: initial;
    opacity: initial;
  }
`;

const ProdutosS = styled.section`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  animation: ${moveLeft} 0.3s forwards;
  margin: 0 2rem;

  li {
    width: 220px;
    height:220px;
    list-style:none;
  }
  h1 {
    text-decoration: none;
    margin: 0.5rem 0;
    color: black;
  }
  @media (max-width: 480px ) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 410px ) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(res => res.json())
    .then(json => setProdutos(json));
  },[])
  if ( produtos === null ) return null;
  return (
    <ProdutosS>
       <Head title="Ranek | Home" description="Home" />
        {produtos.map(produto => (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
            <h1>{produto.nome}</h1>
          </Link>
          ))}
    </ProdutosS>
  )
}
