import React, { useState, useEffect } from 'react';

//Styles, Icons, Images
import * as S from './styles';
import './animations.css';

import api from '../../services/api';

const Projects = () => {

   const [projects, setProjects] = useState([]);
   const [showCard, setShowCard] = useState('hidden-card');

   const getCard = () =>  setShowCard('show-card');
   const outCard = () =>  setShowCard('hidden-card')

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
               <S.Projects key={item.id} BackGround={item.image} >
                  <S.ProjectsDescription onMouseOver={getCard} onMouseOut={outCard} className={showCard}>
                     <div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                     </div>
                     <div >
                        <a href={item.url_project} target="__blank">Ver Projeto</a>
                     </div>
                  </S.ProjectsDescription>
               </S.Projects>
            ))}            
            
         </S.BoxProjects>
      </S.Container>
   )
}

export default Projects;