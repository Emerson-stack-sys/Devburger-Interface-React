import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles.css';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();

  // 🔒 Proteção contra state undefined
  const dpmCheckerLink = location?.state?.dpmCheckerLink;

  const { cartProducts, clearCart } = useCart();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (!cartProducts.length) {
      toast.error('Carrinho vazio!');
      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: 'http://localhost:5173/complete',
        },
      });

      if (error) {
        setMessage(error.message);
        toast.error(error.message);
        return;
      }

      if (paymentIntent?.status === 'succeeded') {
        const products = cartProducts.map((product) => ({
          id: product.id,
          quantify: product.quantify,
          price: product.price,
        }));

        const response = await api.post(
          '/orders',
          { products },
          { validateStatus: () => true },
        );

        if (response.status === 200 || response.status === 201) {
          toast.success('🎉 Pedido realizado com sucesso!');

          setTimeout(() => {
            navigate('/complete');
            clearCart();
          }, 2000);
        } else if (response.status === 400) {
          toast.error('😐 Você não conseguiu fazer o pedido!');
        } else {
          throw new Error('Erro ao criar pedido');
        }
      }
    } catch (err) {
      console.error(err);
      toast.error('😭 Falha no sistema, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };
  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <div className="checkout-form-container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />

        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pagar Agora'
            )}
          </span>
        </button>

        {message && <div className="payment-message">{message}</div>}
      </form>
    </div>
  );
};
