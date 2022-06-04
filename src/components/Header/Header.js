import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderS = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  height:20vh;
  ul {
    list-style: none;
    display:flex;
    padding:0;
    margin:0;
    @media (max-width: 480px) {
      flex-direction: column;
      li {
        margin: 0.5rem 0;
      }
    }
  }
  li {
    margin-right: 1rem;
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: block;
  font-size: 1.2rem;
  background-color: #6A5B6E;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  &:hover {
    background-color: #4A6a6f;
  }
  &.active {
    background-color: #4A6a6E;
  }
  @media (max-width: 480px) {
    padding: 0.3rem 8rem;
  }
  @media (max-width: 350px) {
    padding: 0.3rem 5rem;
  }
`

export const Header = () => {
  return (
    <div>
      <HeaderS>
        <nav>
          <ul>
            <li>
              <Link to="/" end>Home</Link>
            </li>
            <li>
              <Link to="contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </HeaderS>
    </div>
  )
}
