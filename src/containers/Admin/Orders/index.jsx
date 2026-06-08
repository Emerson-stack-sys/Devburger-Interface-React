import { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Row } from './row';
import { api } from '../../../services/api';
import { Filter, FilterOption } from './styles';
import { orderStatusOptions } from './orderStatus';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState('all');
  const [rows, setRows] = useState([]);

  function createData(order) {
    return {
      name: order.user?.name || 'Cliente não identificado',
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products || [],
    };
  }

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await api.get('/orders');

        setOrders(response.data);

        const newRows = response.data.map((order) => createData(order));

        setRows(newRows);
      } catch (error) {
        console.error(
          'Erro ao carregar pedidos:',
          error.response?.data || error.message,
        );
      }
    }

    loadOrders();
  }, []);

  function handleStatus(status) {
    setFilteredStatus(status.id);

    if (status.value === 'all') {
      setRows(orders.map((order) => createData(order)));
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);

      setRows(newOrders.map((order) => createData(order)));
    }
  }

  useEffect(() => {
    if (filteredStatus === 'all') {
      setRows(orders.map((order) => createData(order)));
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === filteredStatus,
      );

      const newOrders = orders.filter(
        (order) => order.status === orderStatusOptions[statusIndex].value,
      );

      setRows(newOrders.map((order) => createData(order)));
    }
  }, [filteredStatus, orders]);

  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={`${status.id}-${status.value}`}
            onClick={() => handleStatus(status)}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
