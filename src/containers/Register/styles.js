import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundLogin});
  background-size: cover;
  background-position: center;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${Background});
  background-size: cover;
  background-position: center;

  p {
    color: #fff;
    font-size: 18px;
    margin-top: 10px;

    a {
      color: #9758A6;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #9758A6;


  span {
    color: #9758A6;
     font-family: "Road Rage", sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    padding: 0 16px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    height: 52px;
  }

  label {
    font-size: 18px;
    line-height: 80%;
    color: #fff;
    font-weight: 600;
    margin-bottom: 5px;
  }
  p {
    color: #ff6b6b;
    font-size: 14px;
    margin-top: 5px;
    font-weight: 600;
    line-height: 80%;
    height: 10px;
  }
`;
 export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
  `;
