import { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useSearchParams } from 'react-router-dom';

export function CompletePayment() {
  const stripe = useStripe();
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = searchParams.get('payment_intent_client_secret');

    if (!clientSecret) {
      setStatus('not-found');
      return;
    }

    const checkPayment = async () => {
      try {
        const { paymentIntent } =
          await stripe.retrievePaymentIntent(clientSecret);

        if (!paymentIntent) {
          setStatus('not-found');
          return;
        }

        switch (paymentIntent.status) {
          case 'succeeded':
            setStatus('success');
            break;

          case 'processing':
            setStatus('processing');
            break;

          case 'requires_payment_method':
            setStatus('failed');
            break;

          default:
            setStatus('unknown');
        }
      } catch (error) {
        console.error('Erro ao verificar pagamento:', error);
        setStatus('unknown');
      }
    };

    checkPayment();
  }, [stripe, searchParams]);

  // ✅ AGORA O RETURN ESTÁ DENTRO DO COMPONENTE
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {status === 'loading' && (
          <>
            <div style={styles.loader}>
              <div style={styles.spinner}></div>
            </div>
            <h2 style={styles.title}>Verificando pagamento...</h2>
            <p style={styles.subtitle}>Aguarde um instante</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ ...styles.icon, color: '#22c55e' }}>✔</div>
            <h2 style={styles.title}>Pagamento aprovado</h2>
            <p style={styles.subtitle}>Seu pedido foi concluído com sucesso</p>
          </>
        )}

        {status === 'processing' && (
          <>
            <div style={{ ...styles.icon, color: '#f59e0b' }}>⏳</div>
            <h2 style={styles.title}>Processando pagamento</h2>
            <p style={styles.subtitle}>Isso pode levar alguns segundos</p>
          </>
        )}

        {status === 'failed' && (
          <>
            <div style={{ ...styles.icon, color: '#ef4444' }}>✖</div>
            <h2 style={styles.title}>Pagamento recusado</h2>
            <p style={styles.subtitle}>Tente outro método de pagamento</p>
          </>
        )}

        {status === 'not-found' && (
          <>
            <div style={{ ...styles.icon, color: '#a855f7' }}>⚠</div>
            <h2 style={styles.title}>Pagamento não encontrado</h2>
            <p style={styles.subtitle}>Verifique a transação</p>
          </>
        )}

        {status === 'unknown' && (
          <>
            <div style={{ ...styles.icon, color: '#64748b' }}>?</div>
            <h2 style={styles.title}>Erro inesperado</h2>
            <p style={styles.subtitle}>Não conseguimos verificar</p>
          </>
        )}
      </div>
    </div>
  );
}

// ✅ styles fora do componente (correto)
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    fontFamily: 'Inter, sans-serif',
  },

  card: {
    background: '#ffffff',
    padding: '45px 35px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
    maxWidth: '420px',
    width: '100%',
  },

  icon: {
    fontSize: '60px',
    marginBottom: '15px',
  },

  title: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#0f172a',
  },

  subtitle: {
    fontSize: '15px',
    color: '#64748b',
  },

  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },

  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #e2e8f0',
    borderTop: '5px solid #6366f1',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
};
