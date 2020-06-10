import React, { useState, useEffect } from 'react';

// Styles, images, colors and Icons
import * as S from './styles';
import '../Home/animations.css';
import { FiArrowDown } from 'react-icons/fi';

//  Components


const Home = () => {

   const [showName, setShowName] = useState('hidden-name');

   useEffect(() => {
      window.onload = setShowName('show-name')
   }, [])

   return (
      <>
         <S.Container id="Home">
            <S.Content>
               <S.Header>
                  <S.BoxTitle>
                     <p>Olá, me chamo
                        <span className={showName}> Marco Aurélio</span>.
                     </p>
                     <p>Sou Desenvolvedor Front-End Júnior.</p>
                  </S.BoxTitle>
                  
                  <S.BoxButton href="#About">
                     Ver meu trabalho <FiArrowDown  size={18} />
                  </S.BoxButton>
               </S.Header>
            </S.Content>
         </S.Container>

      </>
   )
}

export default Home;