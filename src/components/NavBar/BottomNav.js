import React from 'react';

import * as S from './styles';

const BottomNav = ({ open }) => {
   return (
      <>
         <S.BoxNavBar open={open} >
            <li><a href="#Home">Início</a></li>
            <li><a href="#About">Sobre</a></li>
            <li><a href="#Projects">Portfólio</a></li>
            <li><a href="#Contact">Contato</a></li>
         </S.BoxNavBar>
      </>
   )
}

export default BottomNav;
