import { useState } from "react";
import InpuForm from "./inpuForm";
import Card from "./Card";

import React from 'react'

function Defi3() {
    const [nom, setNom]= useState ("");

  return (
    <>
      <h2>Defi3: Composants multiples</h2>
      < InpuForm value={nom} onChange= {setNom}/>
      < Card  nom= {nom}/>
    </>
   
  )
}

export default Defi3