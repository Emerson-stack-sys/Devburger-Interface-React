import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  padding: 20px;
  gap: 40px;
  position: relative;
 
  transition: transform 0.2s ease;
  cursor: grab;

  &:hover {
    transform: scale(1.03);
  }

  div {
    width:100%;
    height:160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
  }
  p {
    margin-top: 130px;
    font-size: 15px;
    font-weight: 500;
    color: #ff9000 ;
    font-weight:700;
  }

  strong {
    line-height: 20px;
    font-size: 22px;
    color: #000000ff;
    font-weight:800;
  }
`;

export const CardImage = styled.img`
  
  height: 180px;
  position: absolute;
  top: -50px;

  
`;

     