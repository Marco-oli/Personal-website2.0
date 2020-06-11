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

export const Projects = styled.div`
   max-width: 450px;
   width: 100%;
   max-height: 360px;
   background-image: url(${props => props.BackGround});
   background-size: cover;
   box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
   box-sizing: content-box;

/* -------- Media ---------*/

   @media (max-width: 874px) {
      max-width: 315px;
      width: 100%;
      max-height: 289px;
   }

   @media (max-width: 874px) {
      max-width: 327px;
      width: 100%;
      max-height: 272px;
   }
   
   @media (max-width: 680px) {
      max-width: 278px;
      width: 100%;
      max-height: 256px;
   }

   @media (max-width: 414px) {
      max-width: 257px;
      width: 100%;
      max-height: 230px;
   }
`;

export const ProjectsDescription = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   max-width: 450px;
   width: 100%;
   height: 360px;
   background-color: #fff;

   h3 {
      font-size: 28px;
      color: ${colors.projectsTitle};
      font-weight: bold;
      line-height: 30px;
   }

   p {
      font-size: 16px;
      color: ${colors.red};
      font-weight: 300;
      text-transform: capitalize
   }

   div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 0.5;

      a {
         text-decoration: none;
         border: 2px solid ${colors.red};
         border-radius: 5px;
         padding: 5px 15px;
         color: ${colors.projectsTitle};

         :hover {
            background-color: ${colors.red};
            color: #fff;
         }
      }
   }

   /* -------- Media ---------*/

   @media (max-width: 874px) {
         max-width: 327px;
         width: 100%;
         max-height: 272px;
      }
   
      @media (max-width: 680px) {
         max-width: 334px;
         width: 100%;
         max-height: 313px;
      }

      @media (max-width: 414px) {
         max-width: 257px;
         width: 100%;
         max-height: 230px;
      }
`;


