import React from 'react';
import colors from '../../assets/colors';
import images from '../../assets/images';

import { 
   IoLogoHtml5,
   IoLogoCss3,
   IoLogoJavascript,
   IoLogoGithub,
} from 'react-icons/io';
import { MdDevices } from 'react-icons/md';
import { FaYarn, FaReact } from 'react-icons/fa';

const CardTecnology = ({icon}) => {
      switch(icon) {
         case 'IoLogoHtml5':
            return  <IoLogoHtml5 size={35} color={colors.html} />;
         case 'IoLogoCss3':
            return  <IoLogoCss3 size={35} color={colors.css}/>;
         case 'IoLogoJavascript': 
            return <IoLogoJavascript size={35} color={colors.javascript}/>;
         case 'IoLogoGithub': 
            return <IoLogoGithub size={35} color={colors.git}/>;
         case 'FaYarn': 
            return <FaYarn size={35} color={colors.yarn}/>;
         case 'FaReact': 
            return <FaReact size={35} color={colors.react}/>;
         case 'MdDevices': 
            return <MdDevices size={35} color={colors.titleAbout}/>;
         case 'expo': 
            return <img src={images.Expo} />;
         default:
            return null;
      }          
}

export default CardTecnology;
