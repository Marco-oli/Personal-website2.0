import React from 'react';
import * as S from './styles';
import { FiArrowDown } from 'react-icons/fi';


const Home = () => {
   return (
      <>
         <S.Container >
            <S.Content>

               <S.Header>
                  <S.BoxTitle>
                     <p>Olá, me chamo <span>Marco Aurélio</span>.</p>
                     <p>Sou Desenvolvedor Front-End Júnior.</p>
                  </S.BoxTitle>
                  
                  <S.BoxButton href="">
                     Ver meu trabalho <FiArrowDown  size={18} />
                  </S.BoxButton>
               </S.Header>

            </S.Content>
         </S.Container>
      </>
   )
}

export default Home;