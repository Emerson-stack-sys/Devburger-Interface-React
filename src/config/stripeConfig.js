import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51Suv9LBSppUX6BPkZwwYuRaVcmKAjyxQqpb3d5aM1NVNqG3brjBXnFw453tj5puGX0ZjqxHmAI4T4Ar1OJbmyob400eCJfw9Oo',
);

export default stripePromise;
