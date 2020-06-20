import React,{ useRef, useState,useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
const Landing = () => {
    const refQuiz=useRef(null)
    const[btn,setBtn]=useState(false)
     useEffect(()=>{
     setTimeout(()=>{ setBtn(true)
    },1000);
     },[])  
    
     const displayBtn=btn && (<Fragment>
         <div  className="leftBox">
             <Link className="btn-welcome" to= "/SignUp">Inscription</Link></div>
     <div  className="rightBox">
         <Link className="btn-welcome" to="/Login">Connexion</Link></div></Fragment> ) 
    return (
        <main ref={refQuiz} className="welcomePage">
           {displayBtn}
        </main>
    )
}

export default Landing
