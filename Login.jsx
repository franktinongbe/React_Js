import React, { useState } from 'react'
import "../App.css"
function Login() {
    const [score, setScore]= useState(10);
    function changeScore (){setScore(score+1)}
    function submit (e){
     e.preventDefault()
     console.log(e.target.email.value)
     console.log(e.target.password.value)
    }
  return (
    <>  
        <button onClick={changeScore}>Click {score}</button>
        <div>Login</div>
         <form onSubmit={submit}>
           <label htmlFor="email">Email</label>
           <input type="email" placeholder='Email' id='email' /> <br />
           <label htmlFor="password">Password</label>
           <input type="password" placeholder='mot de passe' id='password'/> <br />
           <button>Envoyer</button>
         </form>
    </>
    
  )
}

export default Login