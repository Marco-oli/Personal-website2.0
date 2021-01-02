import React, {useState} from 'react'

import * as S from './styles';
import '../../pages/Projects/animations.css';

const CardProject = ({item}) => {
    const [showCard, setShowCard] = useState('hidden-card');

    const getCard = () => setShowCard('show-card') 
    const outCard = () => setShowCard('hidden-card')
    

    return (
        <S.Projects BackGround={item.image} >
        <S.ProjectsDescription onClick={getCard} onMouseLeave={outCard} className={showCard}>
           <div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
           </div>
           <div >
              <a href={item.url_project} target="__blank">Ver Projeto</a>
           </div>
        </S.ProjectsDescription>
     </S.Projects>
    )
}

export default CardProject
