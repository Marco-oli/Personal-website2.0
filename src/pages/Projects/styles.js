import styled from 'styled-components';
import colors from '../../assets/colors';
import images from '../../assets/images';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   min-height: 100vh;
   color: ${colors.textAbout};
   background-color: ${colors.projects};
   position: relative;
   box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
   
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
`;

export const BoxProjects = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr;
   width: 60%;
   height: 720px;
   max-height: 720px;
   box-sizing: border-box;
   margin-top: 50px;
`;

export const Projects1 = styled.div`
   max-width: 390px;
   width: 100%;
   max-height: 360px;
   background-image: url(${images.Eco});
   background-size: cover;


`;
export const Projects2 = styled.div`
   max-width: 390px;
   width: 100%;
   max-height: 360px;
   background-image: url(${images.Pessoal});
   background-size: cover;


`;
export const Projects3 = styled.div`
   max-width: 390px;
   width: 100%;
   max-height: 360px;
   background-image: url(${images.Dt3});
   background-size: cover;


`;
export const Projects4 = styled.div`
   max-width: 390px;
   width: 100%;
   max-height: 360px;
   background-image: url(${images.Qconc});
   background-size: cover;


`;
export const Projects5 = styled.div`
   max-width: 390px;
   width: 100%;
   max-height: 360px;
   background-image: url(${images.Pizza});
   background-size: cover;


`;
export const Projects6 = styled.div`
   max-width: 390px;
   width: 100%;
   max-height: 360px;
   background-image: url(${images.Soccer});
   background-size: cover;


`;
