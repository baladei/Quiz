import { Welcome } from './components/Welcome'
import { Questions } from './components/Questions'
import { QuizContext } from './context/quiz'

import { useContext } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [quizState, dispatch ] = useContext(QuizContext)

  useEffect(()=> {
    //embaralhar as perguntas
    dispatch({type: "REORDER_QUESTIONS"})
  } , [])


  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <Welcome />}
    </div>
  )
}

export default App
