import { UserProvider } from './UserContext';
import { CartProvider } from './CartContext';
import React from 'react';

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider> {children}</CartProvider>
    </UserProvider>
  );
};

export default AppProvider;
