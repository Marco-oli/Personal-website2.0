import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   min-height: 100vh;
   color: ${colors.textAbout};
   background-color: #EFF9FB;
   box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
   
   h1 {
      color: ${colors.titleAbout};
      margin-top: 40px;
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

   @media (max-width: 415px) {
      h1 {
         font-size: 32px;
      }
   }
`;

export const SoftSkills = styled.header`
   display: flex;
   justify-content: space-evenly;
   max-width: 80%;
   margin-top: 50px;

    /* -------- Media ---------*/

    @media (max-width: 980px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
   }
`;

export const Skills = styled.div`
   display: flex;
   align-items: center;
   flex: 0.25;
   flex-direction: column;

   div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.blueStrong};
      border-radius: 30px;
      width: 85px;
      height: 85px;
      
   }

   h4 {
      font-size: 28px;
      margin-top: 5px;
   }

   p {
      line-height: 20px;
      padding: 0 10px 5px;
   }

   /* -------- Media ---------*/

   @media (max-width: 980px) {
      flex: 0.5;
   }

   @media (max-width: 600px) {
     div {
         width: 75px;
         height: 75px;
         border-radius: 25px;
     }

     h4 {
        font-size: 22px;
     }

     p {
        line-height: 16px;
     }
   }
`;

export const Profile =styled.main`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   max-width: 70%;
   flex: 1;
   margin-top: 50px;
   margin-bottom: 50px;

   /* -------- Media ---------*/

   @media (max-width: 980px) {
      flex-direction: column;
      align-items: center;
      
   }
`;

export const BoxProfile =styled.main`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 50%;

   /* -------- Media ---------*/

   @media (max-width: 980px) {
      width: 100%;
   }   
`;

export const BoxProfileImage = styled.div`
  img {
      border-radius: 30px;
      width: 250px;
      height: 210px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const BoxProfileTitle = styled.div`
  h2 {
      font-size: 28px;
      letter-spacing: 0px;
      margin-bottom: 20px;
      
      ::after {
         content: '';
         display: block;
         width: 100%;
         height: 1px;
         background-color: #ccc;
      }
  }
`;

export const BoxProfileDescription = styled.div`
   display: flex;
   justify-content: center;
   

   p {
     max-width: 80%;
   }

   span {
      color: ${colors.blueStrong};
      font-weight: 500;
   }

   /* -------- Media ---------*/

   @media (max-width: 980px) {
      p {
         margin-top: 10px;
         margin-bottom: 20px;
      }
   }
`;

export const Tecnology = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   width: 30%;
   align-items: stretch;

   /* -------- Media ---------*/

   @media (max-width: 980px) {
      width: 100%;
      justify-items: center;
   }
`;




  

   


