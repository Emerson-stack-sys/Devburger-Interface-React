import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from 'react-toastify';
import * as yup from "yup"
import { api } from '../../services/api';

import Logo from '../../assets/Login.svg';
import { Button } from '../../components/Button';
import {
     Container,
     LeftContainer,
     RightContainer,
     Title,
     Form,
     InputContainer,
} from './styles';

export function Login() {
     const schema = yup
          .object({
               email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
               password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
          })
          .required();

     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({
          resolver: yupResolver(schema),
     });

     console.log(errors);

     const onSubmit = async (data) => {
          const response = await toast.promise(
               api.post('/sessions', {
                    email: data.email,
                    password: data.password,
               }),
               {
                    pending: '😒 Verificando seus dados...',
                    success: '😀 Login realizado com sucesso!',
                    error: '😭 Erro ao realizar o login, verifique suas credenciais.',
               }
          );

          console.log(response);
     };

     return (
          <Container>
               <LeftContainer>
                    <img src={Logo} alt="logo-devburger" />
               </LeftContainer>

               <RightContainer>
                    <Title>
                         Olá, seja bem vindo ao <span>Dev Burguer!</span>
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
                         Não possui conta? <a href="#">Clique aqui</a>
                    </p>
               </RightContainer>
          </Container>
     );
}
