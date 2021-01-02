import styled from 'styled-components';
import colors from '../../assets/colors';

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
