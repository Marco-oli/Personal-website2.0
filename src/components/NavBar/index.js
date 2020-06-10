import React, { useState, useEffect } from 'react';

import * as S from './styles';

const NavBar = () => {
   return (
      <S.Container>
         <S.BoxNavBar>
            <li><a href="#Home">Início</a></li>
            <li><a href="#About">Sobre</a></li>
            <li><a href="#Projects">Portfólio</a></li>
            <li><a href="#Contact">Contato</a></li>
         </S.BoxNavBar>
      </S.Container>
   )
}

export default NavBar;