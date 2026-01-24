import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    width: 30px;
    height: 30px;
    background-color: #a3a515;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.5s;
    border: none;

    &:hover {
      background-color: #cbce1e;
    }
  }
`;
export const ButtonGroup2 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    width: 30px;
    height: 30px;
    background-color: #3f8d11a1;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.5s;
    border: none;

    &:hover {
      background-color: #65da21a1;
    }
  }
`;

export const EmptyCart = styled.p`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #777;
`;
export const ProductTotalPrice = styled.span`
  font-weight: bold;
  color: #2e7d32;
`;

export const TrashImage = styled.img`
  width: 20px;
  cursor: pointer;
`;
