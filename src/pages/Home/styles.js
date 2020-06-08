import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
   background-image: linear-gradient(45deg, transparent 0%, transparent 27%,rgba(214, 214, 214,0.06) 27%, rgba(214, 214, 214,0.06) 38%,transparent 38%, transparent 100%),linear-gradient(45deg, transparent 0%, transparent 39%,rgba(214, 214, 214,0.06) 39%, rgba(214, 214, 214,0.06) 68%,transparent 68%, transparent 100%),linear-gradient(90deg, transparent 0%, transparent 74%,rgba(214, 214, 214,0.06) 74%, rgba(214, 214, 214,0.06) 79%,transparent 79%, transparent 100%),linear-gradient(90deg, rgb(0,0,0), rgb(0,0,0));
   
   width: 100%;
   min-height: 100vh;
   display: flex;
   justify-content: center;
`;

export const Content = styled.div`
   width: 100%;
   max-width: 1300px;
   padding: 20px;
   box-sizing: border-box;
`;

export const Header = styled.header`
   display: flex;
   flex: 1;
   justify-content: space-around;
   align-items: center;
`;

export const BoxLogo = styled.div`
   display: flex;
   align-items: center;
   flex: 0.5;
   font-size: 20px;

   h3 {
      padding-left: 10px;
   }
`;

export const BoxLinks = styled.nav`
   display: flex;
   justify-content: space-evenly;
   flex: 0.5;

   a {
      text-decoration: none;
      font-size: 24px;
      transition: all 0.5s;
      font-family: 'Lato', sans-serif;

      :hover {
         color: ${colors.textHover};
      }
   }
`;

export const Main = styled.main`
   display: flex;
   flex-direction: column;
   height: 100%;
   align-items: center;
   justify-content: center;
   letter-spacing: 10px;

   h1 {
      font-size: 45px;

      ::after {
         content: '';
         width: 250px;
         height: 2px;
         background-color: currentColor;
         display: block;
         margin: 20px auto;
         border-radius: 2px;
      }
   }

   p {
      font-size: 20px;
   }
`;

export const BoxImage = styled.div`
   img {
      width: 220px;
      border: 5px solid #BEBEBE;
      border-radius: 50%;
   }
`;