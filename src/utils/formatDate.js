export function formatDate(date) {
  if (!date) return '';

  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) return 'Data inválida';

  return parsedDate.toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}
