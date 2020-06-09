import React from 'react';

import * as S from './styles';

const NavBar = () => {
   return (
      <S.Container>
         <S.BoxNavBar>
            <li><a href="#Home">Início</a></li>
            <li><a href="#About">Sobre</a></li>
            <li><a href="">Portfólio</a></li>
            <li><a href="">Contato</a></li>
         </S.BoxNavBar>
      </S.Container>
   )
}

export default NavBar;