import React from 'react';

import * as S from './styles';
import { FiArrowDown } from 'react-icons/fi';

import NavBar from '../../components/NavBar';

const Home = () => {

   return (
      <>
         <S.Container id="Home">
            <S.Content>

               <S.Header>
                  <S.BoxTitle>
                     <p>Olá, me chamo <span>Marco Aurélio</span>.</p>
                     <p>Sou Desenvolvedor Front-End Júnior.</p>
                  </S.BoxTitle>
                  
                  <S.BoxButton href="#About">
                     Ver meu trabalho <FiArrowDown  size={18} />
                  </S.BoxButton>
               </S.Header>
            </S.Content>
         </S.Container>

         <NavBar />
      </>
   )
}

export default Home;