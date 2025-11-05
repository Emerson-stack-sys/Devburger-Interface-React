import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Title, ContainerItems, CategoryButton } from './styles';
import { useNavigate } from 'react-router-dom';

export function CategoriesCarousel() {
     const [categories, setcategories] = useState([]);
     const navigate = useNavigate();

     useEffect(() => {
          async function loadCategories() {
               const { data } = await api.get('/categories');
               setcategories(data);

          }
          loadCategories();
     }, []);

     const responsive = {
          superLargeDesktop: {
               // the naming can be any, depends on you.
               breakpoint: { max: 4000, min: 1100 },
               items: 4
          },
          desktop: {
               breakpoint: { max: 1100, min: 980 },
               items: 4
          },
          tablet: {
               breakpoint: { max: 980, min: 690 },
               items: 3
          },
          mobile: {
               breakpoint: { max: 690, min: 0 },
               items: 2
          }

     };



     return (
          <Container>
               <Title>Categorias</Title>

               <Carousel
                    responsive={responsive}
                    infinite={true}
                    partialVisibile={false}
                    itemClass="carousel-item"
               >

                    {
                         categories.map((category) => (
                              <ContainerItems key={category.id} $imageUrl={category.url}>
                                   <CategoryButton
                                        onClick={() => {
                                             navigate({
                                                  pathname: `/cardapio`,
                                                  search: `?categoria=${category.id}`,
                                             }
                                             )
                                        }}
                                   >{category.name}</CategoryButton>

                              </ContainerItems>
                         ))}

               </Carousel>
          </Container>
     )
}