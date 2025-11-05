export const formatPrice = (value) => {
     return new Intl.NumberFormat('pt-BR', {  // Formata a Moeda para o padrão brasileiro
          style: 'currency',
          currency: 'BRL',
     }).format(value / 100);
}