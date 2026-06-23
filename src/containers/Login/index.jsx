import { BackButton } from '../../components/BackButton.jsx';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { api } from '../../services/api';
import Logo from '../../assets/Logo.svg';
import { useUser } from '../../hooks/UserContext';
import { Button } from '../../components/Button';

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from './styles';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('A senha é obrigatória'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // valida a cada alteração
  });

  const onSubmit = async (data) => {
    try {
      const response = await toast.promise(
        api.post('/sessions', {
          email: data.email,
          password: data.password,
        }),

        {
          pending: '😒 Verificando seus dados...',
          success: 'Login realizado com sucesso!',
          error: '😭 Erro ao realizar o login',
        },
      );

      const user = response.data;
      console.log('USER:', user);
      localStorage.setItem('devburger:token', user.token);

      putUserData(user);

      setTimeout(() => {
        if (user.admin) {
          navigate('/admin/pedidos');
        } else {
          navigate('/');
        }
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <BackButton />

        <Title>
          Olá, seja bem-vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
