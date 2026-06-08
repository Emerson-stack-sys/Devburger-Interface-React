import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { toast } from 'react-toastify';

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

  file: yup.mixed().required('Imagem é obrigatória'),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = async (data) => {
    console.log(data);

    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price);
    productFormData.append('category_id', data.category);
    productFormData.append('file', data.file[0]);

    try {
      await api.post('/products', productFormData);

      toast.success('Produto cadastrado com sucesso!');
    } catch (error) {
      console.log(error);

      toast.error('Erro ao cadastrar produto');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>

          <Input type="text" {...register('name')} />

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>

          <Input type="number" {...register('price')} />

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

          <Select {...register('category')}>
            <option value="">Selecione uma categoria</option>

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
          <Button type="submit">Cadastrar Produto</Button>
        </InputGroup>
      </Form>
    </Container>
  );
}
