import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { api } from '../../../services/api';

import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  Select,
  InputGroupCategorie,
  Button,
  ErrorMessage,
} from './styles';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),

  price: yup
    .number()
    .typeError('Preço deve ser um número')
    .positive('Preço deve ser positivo')
    .required('Preço é obrigatório'),

  category: yup.string().required('Categoria é obrigatória'),

  file: yup.mixed(),
});

export function EditProduct() {
  const [fileName, setFileName] = useState('');
  const [categories, setCategories] = useState([]);

  const { state } = useLocation();
  const product = state?.product;
  console.log('PRODUCT', product);
  console.log('CATEGORIES', categories);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.file?.[0]) {
        setFileName(value.file[0].name);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');

        console.log('CATEGORIAS DA API:', data);

        setCategories(data);
      } catch (error) {
        console.log('ERRO AO BUSCAR CATEGORIAS');
        console.log(error);
      }
    }

    loadCategories();
  }, []);

  const onSubmit = async (data) => {
    try {
      const productFormData = new FormData();

      productFormData.append('name', data.name);
      productFormData.append('price', data.price);

      productFormData.append('category_id', data.category);

      if (data.file?.[0]) {
        productFormData.append('file', data.file[0]);
      }

      await api.put(`/products/${product.id}`, productFormData);

      toast.success('Produto atualizado com sucesso!');
    } catch (error) {
      console.log(error);

      toast.error('Erro ao atualizar produto');
    }
  };

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>

          <Input
            type="text"
            defaultValue={product.name}
            {...register('name')}
          />

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>

          <Input
            type="number"
            defaultValue={product.price}
            {...register('price')}
          />

          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <Image size={30} />

            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
            />
          </LabelUpload>

          {fileName && <span>{fileName}</span>}

          {errors.file && <ErrorMessage>{errors.file.message}</ErrorMessage>}
        </InputGroup>

        <InputGroupCategorie>
          <Label>Categoria</Label>

          <Select {...register('category')} defaultValue={product.category_id}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
          {errors.category && (
            <ErrorMessage>{errors.category.message}</ErrorMessage>
          )}
        </InputGroupCategorie>

        <InputGroup>
          <Button type="submit">Editar Produto</Button>
        </InputGroup>
      </Form>
    </Container>
  );
}
