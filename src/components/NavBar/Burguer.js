import React, { useState } from 'react'

// Styles, images, icons, colors
import colors from '../../assets/colors';
import { GiHamburgerMenu } from 'react-icons/gi';
import * as S from './styles';
import BottomNav from './BottomNav';



const Burguer = () => {

   const [open, setOpen] = useState(false);

   return (
      <>
         <S.Burguer open={open} onClick={() => setOpen(!open)}>
            <GiHamburgerMenu  size={25} />
         </S.Burguer>

         <BottomNav open={open} />
      </>
   )
}

export default Burguer;