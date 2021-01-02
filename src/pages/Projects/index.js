import React, { useState, useEffect } from 'react';
import CardProject from '../../components/CardProject'

//Styles, Icons, Images
import * as S from './styles';
import './animations.css';

import api from '../../services/api';

const Projects = () => {

   const [projects, setProjects] = useState([]);
   
   useEffect(() => {
     api.get('/pessoal').then(response => {
        setProjects(response.data.projects);
     })
   }, []) 

   return (
      <S.Container id="Projects">
         <div>
            <h1>Portfólio</h1>
         </div>

         <S.BoxProjects>
            {(projects) && projects.map(item => (
               <CardProject key={item.id} item={item} />
            ))}            
            
         </S.BoxProjects>
      </S.Container>
   )
}

export default Projects;