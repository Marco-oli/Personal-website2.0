import React from 'react';

// Styles, Icons, Colors and Images
import { FaWhatsapp } from 'react-icons/fa';
import * as S from './styles';

import Footer from '../../components/Footer';

const Contact = () => {
   return (
      <>
      <S.Container id="Contact">
         <div>
            <h1>Contato</h1>
         </div>

         <S.BoxForm>
            <p>Gostaria de fazer alguma pergunta?</p>
            <form method="post" action="mailto:marcooli.pereira@gmail.com" encType="text/plain" >
               <S.Input type="text" name="nome" id="nome" placeholder="Name" required/>
               <S.Input type="email" name="email" id="email" placeholder="E-mail" required/>
               <S.TextArea name="message" id="message" rows="10" placeholder="Insira sua mensagem" required/>
               <S.BoxButtons>
                  <a href="https://api.whatsapp.com/send?phone=5521964073491" target="_blank" ><FaWhatsapp size={17} /> Whatsapp</a>
                  <S.Button type="submit" >Enviar</S.Button>
               </S.BoxButtons>
            </form>
         </S.BoxForm>

         <a href=""></a>

         <Footer />

      </S.Container>
      
      </>
   )
}

export default Contact;