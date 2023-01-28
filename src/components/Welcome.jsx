import Quiz from "../img/quiz.svg"

import "./Welcome.css"

export const Welcome = () => {
  return (
    <div className="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inínio do Quiz" />
    </div>
  )
}
