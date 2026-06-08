import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const deliveryTax = 500;

  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    console.log('CART:', cartProducts);

    const sumAllItems = cartProducts.reduce((acc, product) => {
      const price = Number(product.price) || 0;
      const quantity = Number(product.quantity) || 0;

      console.log('ITEM:', { price, quantity });

      return acc + price * quantity;
    }, 0);

    console.log('TOTAL CALCULADO:', sumAllItems);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    console.log('ENVIANDO:', { products });

    try {
      const { data } = await api.post('/create-payment-intent', {
        products,
      });

      console.log('RESPOSTA BACKEND:', data);

      navigate('/checkout', {
        state: { clientSecret: data.clientSecret },
      });
    } catch (error) {
      console.error('ERRO BACKEND:', error.response?.data || error);
      toast.error('😭 Falha no sistema, tente novamente.');
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>

          <p className="items">Itens</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>

          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>

      <Button onClick={submitOrder}>Finalizar Pedido</Button>
    </div>
  );
}
