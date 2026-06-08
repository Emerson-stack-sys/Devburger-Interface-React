import { useLocation } from 'react-router-dom';
import stripePromise from '../../config/stripeConfig';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '../../components/Stripe/CheckoutForm';
import { useCart } from '../../hooks/CartContext';

export function Checkout() {
  const { cartItems } = useCart();
  const {
    state: { clientSecret },
  } = useLocation();

  console.log(clientSecret);

  return (
    <Elements stripe={stripePromise} options={clientSecret && { clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
