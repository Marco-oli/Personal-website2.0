import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   height: 50px;
   background-color: ${colors.navbar};
   border-bottom: 2px solid ${colors.red};
`;

export const BoxNavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 80%;
  margin: 0 auto;

  li {
     list-style: none;
  }

  a {
     margin-right: 45px;
     text-decoration: none;
     font-size: 16px;
     text-transform: uppercase;
     color: #fff;
     transition: all 0.6s;

     :focus {
         color: ${colors.blueStrong};
     }

     :hover {
        color: ${colors.blueStrong};
     }
   }

   /* -------- Media ---------*/

   @media (max-width: 600px) {
      flex-flow: column nowrap;
      position: fixed;
      transform: ${({ open }) => open ? 'translateY(33.2%)' : 'translateY(-100%)'};
      top: 0;
      left: 0;
      max-height: 165px;
      width: 100%;
      background-color: ${colors.navbar};
      transition: transform ease-in-out, ;
      
      li {
         display: flex;
         align-items: center;
         padding-top: 10px;
         margin-left: 10px;
      }

      a {
         :hover {
            color: ${colors.blueStrong};
         }
      }
   }
`;

export const Burguer = styled.button`
   background-color: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   padding: 0 10px;
   position: fixed;
   color: ${({ open }) => open ? colors.red : '#fff'};
   z-index: 20;
   display: none;
   transition: all 0.6s ;
   

   /* -------- Media ---------*/
   
   @media (max-width: 600px) {
      display: flex;
   }
`;

