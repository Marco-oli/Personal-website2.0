import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   min-height: 100vh;
   color: #fff;
   background-color: ${colors.contact};
   box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
   
   h1 {
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

    @media (max-width: 415px) {
      h1 {
         font-size: 32px;
      }
   }
`;

export const BoxForm = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 500px;

   p {
      font-size: 18px;
      font-weight: 400;
      color: ${colors.red};
      margin-bottom: 50px;
   }

   /* Media Queries */

   @media (max-width: 600px) {
      width: 90%;
      height: 550px;

      p {
         margin-top: 30px;
      }
   }
`;

export const Input = styled.input`
   padding: 10px;
   margin-bottom: 5px;
   color: #fff;
   background-color: ${colors.message};
   border: none;
   width: 100%;
   font-size: 14px;

   ::-webkit-input-placeholder,
   :-moz-placeholder, 
   ::-moz-placeholder,
   :-ms-input-placeholder {
      color: ${colors.textAbout};
   }


   :focus {
      outline: none;
   }
`;

export const TextArea = styled.textarea`
   padding: 10px;
   color: #fff;
   background-color: ${colors.message};
   border: none;
   width: 100%;
   font-size: 14px;

   ::-webkit-input-placeholder,
   :-moz-placeholder, 
   ::-moz-placeholder,
   :-ms-input-placeholder {
      color: ${colors.textAbout};
   }

   :focus {
      outline: none;
   }
`;

export const BoxButtons = styled.div`
   display: flex;
   justify-content: space-between;

   a {
         display: flex;
         align-items: center;
         justify-content: space-evenly;
         text-decoration: none;
         border: 2px solid #59F878;
         width: 130px;
         color: #59F878;
         font-size: 14px;
         text-transform: uppercase;
         border-radius: 2px;

         :hover {
            background-color: #59F878;
            outline: none;
            color: #fff;
            font-weight: 500;
         }
      }
`;

export const Button = styled.button`
   align-self: flex-end;
   background-color: transparent;
   outline: none;
   border: 2px solid #fff;
   padding: 12px;
   width: 130px;
   color: #fff;
   font-size: 14px;
   text-transform: uppercase;
   cursor: pointer;
   border-radius: 2px;

   :hover {
      background-color: ${colors.red};
      border: 2px solid ${colors.red};
   }
`;