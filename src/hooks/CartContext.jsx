import { useContext, createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

            //Regras de negócios//

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex(
      prd => prd.id === product.id);
    
    
    let newProductsInCart = [cartProducts];

    if (cartIndex >= 0) {
      newProductsInCart = cartProducts;

      newProductsInCart[cartIndex].quantity =
      newProductsInCart[cartIndex].quantity + 1;

      setCartProducts(newProductsInCart);
    } else {
      product.quantity = 1;
      newProductsInCart = ([...cartProducts, product]);
      setCartProducts(newProductsInCart);
    }

    updateLocalStorage(newProductsInCart);
  console.log(cartProducts);
  };

  const clearCart = () => {
    setCartProducts([]);
    updateLocalStorage([]);
  };

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter( (prd) => prd.id !== product.id);

    setCartProdutcs(newCart);
    updateLocalStorage(newCart);
  }

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId
     ? { ...prd, quantity: prd.quantity + 1 }
     : prd;
    });

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  }

  const decreaseProduct = (productId) => {
    const CartIndex = cartProducts.findIndex((prd) => prd.id === productId);

      if (cartProducts[CartIndex].quantity > 1) {
        const newCart = cartProducts.map((prd) => {
      return prd.id === productId
     ? { ...prd, quantity: prd.quantity - 1 }
     : prd;
    });
        setCartProducts(newCart);
         updateLocalStorage(newCart);
        }else{
    deleteProducts(productId);
   
        }
  };

    const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartProducts', JSON.stringify(products));
  };

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
export const useCart = () => {
     const context = useContext(CartContext);
     if (!context) {
          throw new Error('useCart must be used within a CartContext');
     }
     return context;
};