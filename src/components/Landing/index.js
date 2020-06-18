import React,{ useRef} from 'react'

const Landing = () => {
    const refQuiz=useRef(null);
    return (
        <main ref={refQuiz} className="welcomePage">
            <div className="leftBox"><bouton className="btn-welcome">Inscription</bouton></div>
        <div className="rightBox"><bouton className="btn-welcome">Connexion</bouton></div>
        </main>
    )
}

export default Landing
