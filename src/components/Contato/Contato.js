import React from 'react';
import styled, { keyframes } from 'styled-components';

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
const ContatoS = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  animation: ${moveLeft} 0.3s forwards;
  flex: 1;
  
  ul {
    padding:0px;
    list-style: none;
  }
  ul li {
    font-size:1.2rem;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    img {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
const Dados = styled.ul`
    padding:0px;
    list-style: none;
  li {
    font-size:1.2rem;
    margin-bottom: 0.8rem;
  }
`;


export const Contato = () => {
  const [ photo, setPhoto] = React.useState(null);

  React.useEffect(()=>{
    async function fetchFooter (url) {
      const res = await fetch(url);
      const cont = await res.json();
      setPhoto(cont)
    }
    fetchFooter('https://ranekapi.origamid.dev/json/api/produto/smartphone-2')
  }, [])
  if(photo === null) return null;
  return (
    <ContatoS>
      <img src={photo.fotos[0].src} alt="Imagem"/>
      <div>
        <h1>Entre em contato</h1>
        <Dados>
          <li>teste@test.com</li>
          <li>99999-999</li>
          <li>Rua ali perto, 999 Acula City</li>
        </Dados>
      </div>
    </ContatoS>
  )
}