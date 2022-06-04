import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "../Global/GlobalS";
import { Head } from '../Head/Head';
const ProdutoS = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin: 0.5rem 0;
  }
`;
const Span = styled.span`
  padding: 0.3rem;
  background-color: #79B473;
  color: #017e01;
  border-radius: 4px;
  margin: 0.5rem 0;
`
const Desc = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  line-height: 1.5rem;
  font-weight: bold;
`

export const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  const {id} = useParams();  
  
  React.useEffect(()=> {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (e) {
        setError(e, 'Um erro aconteceu.');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id])
  
  if(loading) return (
  <>
    <Loading />
    <p>Carregando..</p>
  </>
  )
  if(error) return <p>{error}</p> 
  if(produto === null) return null; 
 
  return (
    <ProdutoS>
      <Head title={`Ranek | ${produto.nome}`} description={`Ranek | Esse é um produto: ${produto.nome}`}/>
      <div>
        {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo}/>)}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <Span>R$ {produto.preco}</Span>
        <Desc>{produto.descricao}</Desc>
      </div>
    </ProdutoS>
  );
};
