import React from "react";
function InpuForm (value, onChange){
    return (
        <>
        <label htmlFor="text">nom</label>
         <input
         type="text"
         placeholder="Entrez votre  nom" 
         value={value}
         onChange={(e) =>onChange(e.target.value)}
         />

       </> 
    )
}
        
        
export default InpuForm