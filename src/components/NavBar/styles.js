import styled from 'styled-components';
import colors from '../../assets/colors';

export const Container = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   position: absolute;
   z-index: 9;
   min-height: 50px;
   background-color: ${colors.navbar};
   border-bottom: 3px solid ${colors.red};
`;

export const BoxNavBar = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 300px;

  li {
     list-style: none;
  }

  a {
     margin-right: 45px;
     text-decoration: none;
     font-size: 18px;
     text-transform: uppercase;
     color: #fff;
     transition: all 0.6s;

     :hover {
        color: ${colors.blueStrong};
     }

  }
`;

