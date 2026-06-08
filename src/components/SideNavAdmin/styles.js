import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #000;
  padding: 20px 10px; /* 🔥 menor padding */
  transition: width 0.3s ease;

  img {
    width: 60%; /* 🔥 logo menor */
    margin: 40px auto;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* 🔥 controla espaço entre itens */
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  text-decoration: none;

  background-color: ${({ $isActive }) =>
    $isActive ? '#7207ca' : 'transparent'};
  border-radius: 6px;

  font-size: 14px;
  color: #fff;
  transition: 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #7207ca81;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
`;
