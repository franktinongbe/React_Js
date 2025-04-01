import React from 'react'
import { useState } from 'react'

function Defi2() {
    const [nom, setNom]= useState ("");
    const [message, setMessage] = useState ("");
    const [erreur, setErreur] = useState (false);
    function Saisir (e){
        setNom(e.target.value);
        if (e.target.value.trim() !=="") { setErreur (true);
            setMessage("")
            
        }
    };
    function envoyer (e){
        e.preventDefault();
        if (nom.trim()== "") { setErreur(true)
            setMessage ("Veuillez saisir votre nom ce champs ne peut être vide")
            
        } else {
            setErreur(false)
             setMessage ( `Bienvenue ${nom} !`)
            
        }
    }
  return (
    <>
      <h1>Defi2</h1>
      <form onSubmit={envoyer}>
           <label htmlFor="nom">Nom</label> <br /><br />
        <input type="nom" 
           placeholder='Saisissez votre nom'
            value = {nom}
            onChange={Saisir} 
            /> <br />
            <button type>Soumettre</button>
      </form>
      {message &&  <p style={ {color: erreur ? "red": "green"}}>{message} </p> }
    </>

  )
}

export default Defi2