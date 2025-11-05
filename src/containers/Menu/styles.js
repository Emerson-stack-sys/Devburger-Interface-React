import styled from "styled-components";
import BackgroundImage from '../../assets/background.png';
import BannerHamburger from '../../assets/bannerhamburger.svg';
import { Link } from "react-router-dom";

export const  Container = styled.div`
width: 100%;
min-height: none;
background-color: #F3F3F3;
background: linear-gradient(
     rgba(255, 255, 255, 0.8),
     rgba(255, 255, 255, 0.8)
),
url('${BackgroundImage}');

     `;

     export const Banner = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 480px;
     width: 100%;
     position: relative;

     background: url(${BannerHamburger}) no-repeat;
     background-color: #1f1f1f;
     background-position: center;
     background-size: cover;

     h1{
          font-family: 'Road rage', sans-serif;
          font-size: 80px;
          line-height: 65px;
          position: absolute;
          text-align: center;
          color:  #FFFFFF;

          right: 10%;
          top:20%;

          spam{
               color: #FFB800;
               font-family: 'Road rage', sans-serif;
               font-size: 40px;
               line-height: 35px;
               
          }
     }
     `;

     export const CategoryMenu = styled.div`
     display: flex;
     justify-content: center;
     gap: 50px;
     margin-top: 40px;`;

     export const CategoryButton = styled(Link)`
     text-decoration: none;
      cursor: pointer;
     background: none;
     color: ${props => props.$isActiveCategory ? '#cc960fff' : '#5a0d5aff'};
  border: none;
  border-bottom: ${props => props.$isActiveCategory && '5px solid #077422ff'};
  padding-bottom: 5px;
  border-radius: 8px;
  padding: 10px 20px;
 line-height: 30px;;
  font-weight: bold;
  font-size: 24px;
  
  
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;

     export const ProductsContainer  = styled.div`
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     padding: 40px;
     justify-content: center;
     max-width: 1200px;
     margin: 50px auto;
     gap: 42px;

     @media (max-width: 1200px){
          grid-template-columns: repeat(3, 1fr);
     }

     @media (max-width: 900px){
          grid-template-columns: repeat(2, 1fr);
     }

     @media (max-width: 600px){
          grid-template-columns: repeat(1, 1fr);
     }
     `;

     