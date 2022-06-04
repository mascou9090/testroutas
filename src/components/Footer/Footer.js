import React from 'react';
import styled from 'styled-components';

const FooterS = styled.footer`
  text-align: center;
  height: 10rem;
  padding-top: 7rem;
  font-weight: bold;
`;

export const Footer = () => {
  return (
    <>
      <FooterS>
        <h2>Alguns direitos reservados</h2>
      </FooterS>
    </>
  )
};