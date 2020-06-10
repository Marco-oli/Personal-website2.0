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
`;

export const Header = styled.header`
   display: flex;
   flex-direction: column;
   flex: 1;
   justify-content: center;
   align-items:center;
   min-height: 95vh;
`;

export const BoxTitle = styled.div`
   display: flex;
   flex-direction: column;
   line-height: 52px;
   padding-bottom: 25px;
   letter-spacing: 0px;
   font-weight: 300;

   p {
      display: flex;
      justify-content: center;
      font-size: 44px; 
   }

   span {
      font-size: 46px;
      font-weight: 500;
      color: ${colors.blueStrong};
   }

`;

export const BoxButton = styled.a`
   text-decoration: none;
   display: flex;
   align-items: center;
   box-sizing: inherit;   
   font-size: 18px;
   color: ${colors.text};
   padding: 0;
   line-height: 40px;
   font-family: 'Raleway', sans-serif;
   font-weight: 300;
   letter-spacing: 0px;
   border: 2px solid #fff;
   border-radius: 5px;
   padding: 0 10px;
   transition: all 0.5s;

   :hover {
      background-color: ${colors.red};
      border: 2px solid ${colors.red};
      color: ${colors.textHover};
   }
   
`;

