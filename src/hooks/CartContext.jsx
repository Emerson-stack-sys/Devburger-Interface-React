import { useContext, createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // ===============================
  // ADICIONAR PRODUTO
  // ===============================
  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductsInCart = [...cartProducts];

    if (cartIndex >= 0) {
      newProductsInCart[cartIndex] = {
        ...newProductsInCart[cartIndex],
        quantity: newProductsInCart[cartIndex].quantity + 1,
      };
    } else {
      newProductsInCart.push({ ...product, quantity: 1 });
    }

    setCartProducts(newProductsInCart);
    updateLocalStorage(newProductsInCart);
  };

  // ===============================
  // LIMPAR CARRINHO
  // ===============================
  const clearCart = () => {
    setCartProducts([]);
    updateLocalStorage([]);
  };

  // ===============================
  // DELETAR PRODUTO
  // ===============================
  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  // ===============================
  // AUMENTAR QUANTIDADE
  // ===============================
  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) =>
      prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd,
    );

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  // ===============================
  // DIMINUIR QUANTIDADE
  // ===============================
  const decreaseProduct = (productId) => {
    const product = cartProducts.find((prd) => prd.id === productId);

    if (!product) return;

    if (product.quantity > 1) {
      const newCart = cartProducts.map((prd) =>
        prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd,
      );

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  // ===============================
  // LOCAL STORAGE
  // ===============================
  const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartProducts', JSON.stringify(products));
  };

  // ===============================
  // LOAD INICIAL
  // ===============================
  useEffect(() => {
    const clientCartData = localStorage.getItem('devburger:cartProducts');

    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ===============================
// HOOK CUSTOM
// ===============================
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
