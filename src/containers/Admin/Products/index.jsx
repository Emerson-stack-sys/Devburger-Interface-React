import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, ProductImage, EditButton } from './styles';
import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');
      setProducts(data);
    }

    loadProducts();
  }, []);

  const handleEditProduct = (product) => {
    navigate(`/admin/editar-produto/${product.id}`, {
      state: { product },
    });
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell align="center">Editar Produto</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>

                <TableCell align="center">{product.price}</TableCell>

                <TableCell align="center">
                  {product.offer ? 'Sim' : 'Não'}
                </TableCell>

                <TableCell align="center">
                  <ProductImage src={product.url} alt={product.name} />
                </TableCell>

                <TableCell align="center">
                  <EditButton onClick={() => handleEditProduct(product)}>
                    <Pencil size={18} />
                    Editar
                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
