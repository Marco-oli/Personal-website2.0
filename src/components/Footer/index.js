import React from 'react';
import { TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';
import { IoLogoGithub, IoMdArrowRoundUp } from 'react-icons/io';

//images, icons, colors, styles
import * as S from './styles';

const Footer = () => {
   return (
      <S.Container>
         <S.BoxButton>
            <a href="#Home">
               <IoMdArrowRoundUp size={25} />
            </a>
         </S.BoxButton>

         <S.BoxLinks>
            <a href="https://www.linkedin.com/in/marcoaurelio-frontend/" target="__blank">
               <TiSocialLinkedin size={27} />
            </a>
            <a href="https://www.facebook.com/markiinho.oliveira.146" target="__blank">
               <TiSocialFacebook size={25} />
            </a>
            <a href="https://www.instagram.com/markiinho.oliveira/" target="__blank">
               <TiSocialInstagram size={25} />
            </a>
            <a href="https://github.com/Marco-oli" target="__blank">
               <IoLogoGithub size={25} />
            </a>
         </S.BoxLinks>
         
         <p>Marco Aurélio <span>©2020</span></p>
         
   </S.Container>
   )
}

export default Footer;