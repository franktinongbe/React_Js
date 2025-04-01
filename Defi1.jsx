import React from 'react'
import { useState } from 'react'

function Defi1() {
    const [nom, setNom]= useState("");
    const [soumis, setSoumis]= useState(false);
    function submit (e){
        e.preventDefault;
        if (nom.trim()!=="") {setSoumis(true) ;

         }
    };
  return (
    <>
         <h1>Defi1</h1>
         <form onSubmit={submit}>
            <label htmlFor="text">Nom</label> <br />
            <input type="text" 
            placeholder='Saisissez le nom'
            onChange={(e)=>setNom(e.target.value)}/> <br />
            <button>Soumettre</button>
         </form>

         
         {soumis &&  <p>Bienvenue {nom} !</p> }
    </>
    
  )
}

export default Defi1