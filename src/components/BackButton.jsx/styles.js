import styled from "styled-components";

export const Container = styled.button`
position: fixed; /* Fixa o botão na tela */
  bottom: 40px; /* Distância do rodapé */
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Corrige o alinhamento */
  

  color: #6d0310ff;
  border: none;
  border-radius: 8px;
  padding: 5px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #7207ca81; /* Tom mais escuro */
  }

  &:active {
    transform: scale(0.97);
  }
`;

