import React from 'react';
import { IoMdSpeedometer, IoIosRocket } from 'react-icons/io';
import { MdDevices, MdHighQuality } from 'react-icons/md';

const IconAbout = ({icon}) => {
   switch(icon) {
      case 'IoMdSpeedometer':
         return  <IoMdSpeedometer fontSize={40} color="#fff"/>;
      case 'MdHighQuality':
         return <MdHighQuality fontSize={40} color="#fff"/>;
         case 'MdDevices':
            return <MdDevices fontSize={40} color="#fff"/>;
         case 'IoIosRocket':
            return <IoIosRocket fontSize={40} color="#fff"/>;
         default:
            return null;
   }
} 

export default IconAbout;