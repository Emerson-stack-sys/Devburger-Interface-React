import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const Header = styled.thead``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: left;
  padding: 16px;
  background-color: #333;
  font-size: 14px;
  color: #f5f5f5;

  &:last-child {
    border-top-right-radius: 20px;
  }
  &:first-child {
    border-top-left-radius: 20px;
  }
`;
export const Td = styled.td`
  padding: 16px;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  color: #555;
`;

export const Body = styled.tbody``;

export const productTotalPrice = styled.div`
  font-weight: bold;
`;
