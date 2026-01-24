import { BackButton } from "../../components/BackButton.jsx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
     Container,
     Banner,
     CategoryMenu,
     ProductsContainer,
     CategoryButton,
} from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";


export function Menu() {
     const [categories, setCategories] = useState([]);
     const [products, setProducts] = useState([]);

     const [filteredProducts, setFilteredProducts] = useState([]);


     const navigate = useNavigate();

     const { search } = useLocation();

     const queryParams = new URLSearchParams(search);



     const [activeCategory, setActiveCategory] = useState(() => {
          const categoryId = queryParams.get("categoria");
          if (categoryId) {
               return categoryId;
          }
          return 0;
     });




     useEffect(() => {
          async function loadCategories() {
               try {
                    const { data } = await api.get("/categories");
                    const newCategories = [{ id: 0, name: "Todas" }, ...data];
                    setCategories(newCategories);
               } catch (error) {
                    console.error("Erro ao carregar categorias:", error);
               }
          }

          async function loadProducts() {
               try {
                    const { data } = await api.get("/products");
                    console.log("Exemplo de produto do backend:", data[0]);
                    const newProducts = data.map((product) => ({
                         ...product,
                         currencyValue: formatPrice(Number(product.price)),
                    }));

                    setProducts(newProducts);
               } catch (error) {
                    console.error("Erro ao carregar produtos:", error);
               }
          }

          loadCategories();
          loadProducts();
     }, []);

     useEffect(() => {



          if (activeCategory === 0) {
               setFilteredProducts(products);
          } else {

               if (products.length > 0) {
                    console.log(
                         "Tipos:",
                         typeof activeCategory,           // deve ser "number"
                         typeof products[0].category_id   // deve ser "number"
                    );
               }


               const newFilteredProducts = products.filter(
                    (product) => product.category_id === Number(activeCategory)
               );

               setFilteredProducts(newFilteredProducts);

          }
     }, [products, activeCategory]);

     return (
          <Container>
               <div style={{ padding: "16px" }}>
                    <BackButton />

               </div>
               <Banner>
                    <h1>
                         O MELHOR <br />
                         HAMBURGER BRASILEIRO <br />
                         ESTÁ AQUI! <br />
                         <span>Esse cardápio está irresistível!</span>
                    </h1>
               </Banner>

               <CategoryMenu>
                    {categories.map((category) => (
                         <CategoryButton
                              key={category.id}

                              $isActiveCategory={category.id === activeCategory}
                              onClick={() => {
                                   navigate(
                                        {
                                             pathname: `/cardapio`,
                                             search: `?categoria=${category.id}`,

                                        },
                                        {
                                             replace: true
                                        },
                                   );

                                   setActiveCategory(category.id);
                              }}
                         >
                              {category.name}
                         </CategoryButton>
                    ))}
               </CategoryMenu>

               <ProductsContainer>
                    {filteredProducts.map((product) => (
                         <CardProduct key={product.id} product={product} />
                    ))}
               </ProductsContainer>
          </Container>
     );
}

