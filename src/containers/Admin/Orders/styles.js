import styled from 'styled-components';
import Select from 'react-select';

export const ProductImage = styled.img`
  padding: 20px;
  width: 100px;
  height: 100px;
  border-radius: 17px;
`;

export const SelectStatus = styled(Select)`
  width: 150px;
  .react-select__control {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
  }
`;

export const Filter = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 20px;
`;

export const FilterOption = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #1e2e41;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #7b22af;
  }
`;

export const orderStatusOptions = [
  { label: 'Todos', value: 'all' },
  { label: 'Pedido Realizado', value: 'Pedido realizado' },
  { label: 'Em Preparação', value: 'Em Preparação' },
  { label: 'Pronto para Entrega', value: 'Pronto' },
  { label: 'Pedido à Caminho', value: 'Em rota' },
  { label: 'Entregue', value: 'Entregue' },
];
