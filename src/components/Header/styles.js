import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  height: 80px;
  padding: 0 56px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    hr {
      width: 1px;
      height: 24px;
      border: 1px solid #9758a6;
      background-color: #fff;
    }
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => (props.active ? '#9758a6' : '#fff')};
  border-bottom: 2px solid
    ${(props) => (props.active ? '#9758a6' : 'transparent')};
  padding-bottom: 4px;
  font-size: 16px;
  text-decoration: none;
  transition: color 200ms;

  &:hover {
    color: #9758a6;
  }
`;
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  p {
    color: #fff;
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: #9758a6;
    }
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Logout = styled.button`
  color: #ff3205;
  text-decoration: none;
  background: transparent;
  font-weight: 700;
  border: none;
`;
