import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from '../../components/SideNavAdmin';
import { Container } from './styles';

export function AdminLayout() {
  const isAdmin = true;

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
