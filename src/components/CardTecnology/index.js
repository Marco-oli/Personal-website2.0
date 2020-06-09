import React from 'react';
import colors from '../../assets/colors';
import images from '../../assets/images';
import * as S from './styles';

import { 
   IoLogoHtml5,
   IoLogoCss3,
   IoLogoJavascript,
   IoLogoGithub,
} from 'react-icons/io';
import { MdDevices } from 'react-icons/md';
import { FaYarn, FaReact } from 'react-icons/fa';



const CardTecnology = ({icon, title}) => {
      switch(icon) {
         case 'IoLogoHtml5':
                  return <S.BoxTecnology pColor={colors.html} boxColor={colors.html}><IoLogoHtml5 size={35} color={colors.html} /><p>{title}</p></S.BoxTecnology>
         case 'IoLogoCss3':
                  return <S.BoxTecnology pColor={colors.css} boxColor={colors.css}><IoLogoCss3 size={35} color={colors.css}/><p>{title}</p></S.BoxTecnology>;  
         case 'IoLogoJavascript': 
                  return <S.BoxTecnology pColor={colors.javascript} boxColor={colors.javascript}><IoLogoJavascript size={35} color={colors.javascript}/><p>{title}</p></S.BoxTecnology>       
         case 'IoLogoGithub': 
                  return <S.BoxTecnology pColor={colors.git} boxColor={colors.git}><IoLogoGithub size={35} color={colors.git}/><p>{title}</p></S.BoxTecnology>       
         case 'FaYarn': 
                  return <S.BoxTecnology pColor={colors.yarn} boxColor={colors.yarn}><FaYarn size={35} color={colors.yarn}/><p>{title}</p></S.BoxTecnology>  
         case 'FaReact': 
                  return <S.BoxTecnology pColor={colors.react} boxColor={colors.react}><FaReact size={35} color={colors.react}/><p>{title}</p></S.BoxTecnology>  
         case 'MdDevices': 
                  return <S.BoxTecnology pColor={colors.textAbout} pColor={colors.textAbout}><MdDevices size={35} color={colors.titleAbout}/><p>{title}</p></S.BoxTecnology>
         case 'expo': 
                  return <S.BoxTecnology pColor={colors.expo} boxColor={colors.expo}><img src={images.Expo} /><p>{title}</p></S.BoxTecnology>    
         default:
            return null;
      }          
}

export default CardTecnology;