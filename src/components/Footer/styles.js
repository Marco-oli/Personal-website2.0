import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 60px 0;
   background-color: ${colors.navbar};
   box-sizing: border-box;

   p {
      color: ${colors.textHover};
      
      span {
         color: ${colors.blueStrong};
      }
   }
`;

export const BoxButton = styled.div`
   display: flex;
   align-items: center;
   position: absolute;
   margin-top: -90px;

   a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: ${colors.red};
      text-decoration: none;
      border-radius: 50%;
      width: 55px;
      height: 55px;

      :hover {
         background-color: ${colors.red};
         transition: all .8s;
      }
   }
`;

export const BoxLinks = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;
   max-width: 350px;

   a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: ${colors.contact};
      text-decoration: none;
      width: 55px;
      height: 55px;
      margin-bottom: 20px;

      :hover {
         background-color: ${colors.red};
         transition: all .8s;
      }
   }
`;

