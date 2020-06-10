import React, { useState, useEffect } from 'react';

// Images, Styles, Icons...
import images from '../../assets/images';
import * as S from './styles';
import IconAbout from '../../components/IconAbout';

// Components and Apis
import api from '../../services/api';
import CardTecnology from '../../components/CardTecnology';

const About = () => {

   const [dados, setDados] = useState([]);
   const [tecnology, setTecnology] = useState([]);

   useEffect(() => {
      api.get('/pessoal').then(response => {
         setDados(response.data.sobre)
      })
   }, [])

   useEffect(() => {
      api.get('/pessoal').then(response => {
         setTecnology(response.data.tecnology)
      })
   }, [])
   
   
   return (
      <>
         <S.Container id="About">

            <div>
               <h1>Sobre</h1>
            </div>
            
            <S.SoftSkills>

               {(dados) ? dados.map(item => (
                  <S.Skills key={item.id}>
                     <div>
                        <IconAbout icon={item.icon}/>
                     </div>
                     <h4>{item.title}</h4>
                     <p>{item.subtitle}</p>
                  </S.Skills>
               )) : console.log('error')}

            </S.SoftSkills>

            <S.Profile >
               <S.BoxProfile>
                  <S.BoxProfileImage>
                     <img src={images.Profile} alt=""/>
                  </S.BoxProfileImage>
                  <S.BoxProfileTitle>
                     <h2>Quem sou?</h2>
                  </S.BoxProfileTitle>
                  <S.BoxProfileDescription>
                     <p>Sou desenvolvedor front-end do <span>Rio de Janeiro</span> - RJ, Brasil.
                        Criei uma grande paixão por interfaces web e mobile, animações e <span>criação de experiências intuitivas</span> e dinâmicas para o usuário.
                        Vamos criar algo juntos!</p>
                  </S.BoxProfileDescription>
               </S.BoxProfile>

               <S.Tecnology>
               {(tecnology) ? tecnology.map(item => (
                  <CardTecnology key={item.id} icon={item.icon} title={item.title}/>
               )) : null}

               </S.Tecnology>
               
            </S.Profile>

           
         </S.Container>

         
      </>
   )
}

export default About;