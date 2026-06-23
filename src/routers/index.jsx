import { Route, Routes } from 'react-router-dom';

import { EditProduct } from '../containers/Admin/EditProduct';
import {
  Cart,
  Home,
  Login,
  Menu,
  Register,
  Checkout,
  CompletePayment,
  Orders,
  NewProduct,
  Products,
} from '../containers';

import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';

export function Router() {
  return (
    <Routes>
      {/* 👤 ROTAS DO USUÁRIO */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} /> {/* 👈 HOME CORRETA */}
        <Route path="cardapio" element={<Menu />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="complete" element={<CompletePayment />} />
      </Route>

      {/* 🔐 ADMIN */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="pedidos" element={<Orders />} />
        <Route path="novo-produto" element={<NewProduct />} />
        <Route path="produtos" element={<Products />} />
        <Route path="editar-produto/:id" element={<EditProduct />} />
      </Route>

      {/* 🔑 AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
