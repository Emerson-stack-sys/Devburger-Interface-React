import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "./styles";

export function BackButton({ to }) {
     const navigate = useNavigate();

     function handleClick() {
          if (to) {
               navigate(to);
          } else {
               navigate(-1);
          }
     }

     return (
          <Container onClick={handleClick}>
               <ArrowLeft size={20} />
               Voltar
          </Container>
     );
}
