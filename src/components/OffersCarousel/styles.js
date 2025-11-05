import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px; /* espaço entre os itens da biblioteca de carrossel */
  }

  overflow-x: hidden;
  .react-multi-carousel-list {
   overflow: visible;
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
  padding-bottom: 40px;
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

