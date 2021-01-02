import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   min-height: 110vh;
   color: ${colors.textAbout};
   background-color: ${colors.projects};
   box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
   box-sizing: content-box;
   
   h1 {
      color: ${colors.titleAbout};
      margin-top: 50px;
      font-size: 40px;
      letter-spacing: 0px;
      text-transform: uppercase;

      ::after {
         content: '';
         width: 50px;
         height: 1px;
         background-color: currentColor;
         display: block;
         align-items: center;
         
      }
   }

   /* -------- Media ---------*/

   @media (max-width: 1315px) {
      min-height: 150vh;
   }

   @media (max-width: 874px) {
      min-height: 125vh;
   }

   @media (max-width: 680px) {
      min-height: 210vh;
   }

   @media (max-width: 415px) {
      min-height: 265vh;

      h1 {
         font-size: 32px;
      }
   }

   @media (max-width: 320px) {
      min-height: 295vh;
   }
`;

export const BoxProjects = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr;
   gap: 20px;
   width: 80%;
   height: 720px;
   max-height: 720px;
   margin-top: 50px;

   /* -------- Media ---------*/   

   @media (max-width: 1315px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      margin-top: 40px;
      width: 70%;
   }

   @media (max-width: 874px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      margin-top: 40px;
      width: 84%;
   }

   @media (max-width: 680px) {
      grid-template-columns: 1fr;
      margin-top: 40px;
      width: 42%;
   }

   @media (max-width: 414px) {
      grid-template-columns: 1fr;
      margin-top: 40px;
      width: 60%;
   }
`;



