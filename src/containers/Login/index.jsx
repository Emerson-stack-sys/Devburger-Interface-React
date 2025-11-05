import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../services/api";
import Logo from "../../assets/Login.svg";
import { Button } from "../../components/Button";
import {
     Container,
     LeftContainer,
     RightContainer,
     Title,
     Form,
     InputContainer,
     Link,
} from "./styles";

export function Login() {
     const navigate = useNavigate();

     const schema = yup
          .object({
               email: yup
                    .string()
                    .email("Digite um e-mail válido")
                    .required("O e-mail é obrigatório"),
               password: yup
                    .string()
                    .min(6, "A senha deve ter pelo menos 6 caracteres")
                    .required("A senha é obrigatória"),
          })
          .required();

     const {
          register,
          handleSubmit,
          formState: { errors },
          watch
     } = useForm({
          resolver: yupResolver(schema),
          mode: "onChange", // valida a cada alteração
     });

     const onSubmit = async (data) => {
          try {
               const response = await toast.promise(
                    api.post("/sessions", {
                         email: data.email,
                         password: data.password,
                    }),
                    {
                         pending: "😒 Verificando seus dados...",
                         success: {
                              render({ data }) {
                                   const userName = data?.data?.user?.name || "usuário";
                                   setTimeout(() => {
                                        navigate("/");
                                   }, 2000);
                                   return `😀 ${userName}, seja bem-vindo(a) ao Dev Burguer!`;
                              },
                         },
                         error: "😭 Erro ao realizar o login, verifique suas credenciais.",
                    }
               );

               localStorage.setItem("token", response.data.token);

          } catch (error) {
               console.error("Erro na requisição de login:", error);

               if (error.response) {
                    console.error("Erro do servidor:", error.response.data);
                    toast.error(error.response.data.message || "Erro no login.");
               } else if (error.request) {
                    console.error("Sem resposta do servidor:", error.request);
                    toast.error("Servidor não respondeu. Tente novamente mais tarde.");
               } else {
                    console.error("Erro inesperado:", error.message);
                    toast.error("Erro inesperado ao realizar o login.");
               }
          }
     };

     return (
          <Container>
               <LeftContainer>
                    <img src={Logo} alt="logo-devburger" />
               </LeftContainer>

               <RightContainer>
                    <Title>
                         Olá, seja bem-vindo ao <span>Dev Burguer!</span>
                         <br />
                         Acesse com seu <span>Login e senha.</span>
                    </Title>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                         <InputContainer>
                              <label>Email</label>
                              <input type="email" {...register("email")} />
                              <p>{errors?.email?.message}</p>
                         </InputContainer>

                         <InputContainer>
                              <label>Senha</label>
                              <input type="password" {...register("password")} />
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

