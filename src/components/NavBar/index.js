import React, { useState, useEffect } from 'react';

import * as S from './styles';
import Burguer from './Burguer';

const NavBar = () => {

   return (
      <S.Container>
         <Burguer />
      </S.Container>
   )
}

export default NavBar;