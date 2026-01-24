import styled from 'styled-components';
import Texture from '../../assets/Texture.png';

import background from '../../assets/background-login.svg';
export const Container = styled.div`
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
    url(${Texture});

  background-repeat: repeat;
  background-size: auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  padding: 20px 0;

  img {
    max-width: 200px;
    height: auto;
  }
`;
export const Title = styled.h1`
  font-family: 'poppins', sans-serif;
  font-size: 40px;
  margin-bottom: 35px;
  color: #6dc905ff;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #6dc905ff;
    border-radius: 2px;
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  grid-template-columns: 1fr 20%;
  gap: 20px;
  display: grid;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CartContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto; /* 👈 centraliza */
  padding: 0 1rem; /* 👈 respiro nas laterais */
`;
