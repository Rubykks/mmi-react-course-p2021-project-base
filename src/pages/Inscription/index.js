import React from 'react'

import ButtonNext from '../../components/ButtonNext';

import InputString from '../../components/InputString';
import styles from "./Inscription.module.css";
import GoogleIcon from "./img/googleIcon.svg";
import AppleIcon from "./img/appleIcon.svg";
import FacebookIcon from "./img/facebookIcon.svg";



const Inscription = () => {
  return (
    <div className={styles.containerInscription}>
    <h2 className={styles.TitreInscription}>Enchanté, qui es-tu ?</h2>
    
    <div className={styles.inputMail}>

      <InputString

      inputType= "email"
      placeHolderInput= "Adresse mail"
      color ="#2B2B2B" 
      backgroundColor="rgba(247, 247, 247, 0.50)" 
      fontWeight= '500'
      />
    </div>

    <div className={styles.inputUsername}>

      <InputString

      inputType= "text"
      placeHolderInput= "Nom d'utilisateur"
      color ="#2B2B2B" 
      backgroundColor="rgba(247, 247, 247, 0.50)" 
      fontWeight= '500'
      />
      
    </div>
    

<div className={styles.inputMotDePasse}>
      <InputString
       inputType= "password"
       placeHolderInput= "Mot de passe"
       color ="#2B2B2B" 
       backgroundColor="rgba(247, 247, 247, 0.50)" 
       fontWeight= '500'
       
      />
      
    </div>

    <p className={styles.textMdp}>16 caractères maximum</p>


<div className={styles.inputConfirmedMdp}>
      <InputString
       inputType= "password"
       placeHolderInput= "Confirmer le mot de passe"
       color ="#2B2B2B" 
       backgroundColor="rgba(247, 247, 247, 0.50)" 
       fontWeight= '500'
       size='24'
       
       
      />
    </div>


    <div className={styles.boutouSuivant}>
      <ButtonNext 
      name ="Suivant" 
      color ="#F8F8F8" 
      backgroundColor="rgba(0, 0, 0, 0.85)" 
      fontWeight= '700'/>
      </div>

      <p className={styles.orText}>ou</p>

      <div className={styles.containerIcon}>

      <div className={styles.iconItem1}>
            <img
              src={FacebookIcon}
              alt="GoogleIcon"
            />
        </div>

        <div className={styles.iconItem2}>
            <img
             
              src={AppleIcon}
              alt="AppleIcon"
            />
        </div>


      <div className={styles.iconItem3}>
            <img
             
              src={GoogleIcon}
              alt="GoogleIcon"
            />
        
        
        </div>
      </div>

      <div className={styles.alreadySubscribe}></div>
      <p className={styles.dejaInscrit}>Déjà inscrit ?</p>

    <div className={styles.connecteToi}>
      <ButtonNext 
      name ="Connecte-toi !" 
      color ="#F8F8F8" 
      backgroundColor="rgba(0, 0, 0, 0.85)" 
      fontWeight= '700'/>
      </div>

      </div>
  );
};

export default Inscription;