import React from 'react';
import * as S from './styles';

const Projects = () => {
   return (
      <S.Container id="Projects">
         <div>
            <h1>Portfólio</h1>
         </div>

         <S.BoxProjects>
            <S.Projects1></S.Projects1>
            <S.Projects2></S.Projects2>
            <S.Projects3></S.Projects3>
            <S.Projects4></S.Projects4>
            <S.Projects5></S.Projects5>
            <S.Projects6></S.Projects6>
         </S.BoxProjects>
      </S.Container>
   )
}

export default Projects;