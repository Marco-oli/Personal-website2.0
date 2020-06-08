import React from 'react';
import * as S from './styles';
import { BsCodeSlash } from 'react-icons/bs';

import images from '../../assets/images';
import colors from '../../assets/colors';

const Home = () => {
   return (
      <>
         <S.Container >
            <S.Content>

               <S.Header>
                  <S.BoxLogo>
                     <BsCodeSlash color={colors.text} size={25}/>
                     <h3>Developer</h3>
                  </S.BoxLogo>

                  <S.BoxLinks>
                     <a href="">Sobre</a>
                     <a href="">Tecnologias</a>
                     <a href="">Potfólio</a>
                  </S.BoxLinks>
               </S.Header>

               <S.Main>
                  <S.BoxImage>
                     <img src={images.Profile} alt="profile"/>
                  </S.BoxImage>
                  <h1>Marco Aurélio</h1>
                  <p>Front-End Developer</p>
               </S.Main>

            </S.Content>
         </S.Container>
      </>
   )
}

export default Home;