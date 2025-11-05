import styled from 'styled-components';
import BannerHome from '../../assets/bannerHome.svg';
import BackgroundImage from '../../assets/background.png';


export const Banner = styled.div`
background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 480px;
position: relative;


h1 {
       font-family: "Road Rage", sans-serif;
       font-size: 80px;
        color: #fff;
           position: absolute;
               margin-top: 10%;
               margin-right: 20%;
}
`;

export const Container = styled.section`
background: linear-gradient(
     rgba(255, 255, 255, 0.8),
     rgba(255, 255, 255, 0.8)
),
url('${BackgroundImage}');

height: 500px;


`;

