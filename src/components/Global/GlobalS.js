import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #D8CBC7;
    text-decoration: none;
    color: black;
  }
  img {
    max-width: 100%;
    border-radius: .5rem;
  }
`
export const Key = keyframes`
  to {
    transform: rotate(360deg);
  }
` 
export const Loading = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-right-color: transparent;
  animation: ${Key} 1s infinite;
`