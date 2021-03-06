import styled from 'styled-components';
import colors from '../../assets/colors';

export const BoxTecnology = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-evenly;
   max-height: 100px;
   max-width: 100px;
   padding: 5px;
   background-color: #fff;
   border-radius: 50%;
   box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
   transition: all 0.8s;

   :hover {
      background-color: transparent;
      box-shadow: 0px 0px 4px ${props => props.boxColor};

      p {
         color: ${props => props.pColor}
      }
   }

   p {
      font-size: 18px;
      font-weight: bold;
      transition: all 0.8s;
   }

   /* -------- Media ---------*/

   @media (max-width: 980px) {
      border-radius: 20%;
      height: 70px;
      width: 70px;
      margin-bottom: 10px;

      p {
         display: none;
      }
   }

`;