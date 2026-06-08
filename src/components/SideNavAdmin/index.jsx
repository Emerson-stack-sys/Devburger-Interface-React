import { SignOutIcon } from '@phosphor-icons/react';
import { navLinks } from './navLinks';
import Logo from '../../assets/Logo.svg';
import { Container, NavLinkContainer, Footer, NavLink } from './styles';
import { useUser } from '../../hooks/UserContext';
import { useLocation } from 'react-router-dom';

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useLocation();

  return (
    <Container>
      <img src={Logo} alt="Hamburger logo DevBurger" />

      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>

      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOutIcon size={20} />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
