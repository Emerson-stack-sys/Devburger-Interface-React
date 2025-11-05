import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px; /* espaço entre os itens da biblioteca de carrossel */
  }

  .react-multiple-carousel__arrow--left {
    left: calc(4% + 1px);
    left: 15px;
    top: 10px;
}

.react-multiple-carousel__arrow--right {
    right: calc(4% + 1px);
    right: 15px;
    top: 10px;
}
  padding-left: 40px;
`;



export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &::after {
    content: '';
    width: 56px;
    height: 4px;
    background-color: #ffb800;
    position: absolute;
    bottom: 0;
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;
  margin-right: 20px;

  
`;


export const CategoryButton = styled(Link)`
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 24px;
    font-weight: 500;
    margin-top: 50px;
    text-decoration: none;

    &:hover {
        background-color: rgba(16, 179, 208, 0.65);
    }
`;