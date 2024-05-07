import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';
import './App.css'
import { useState } from 'react'

function App() {

  const [ isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGameplay}/>}
    </>
  )
}

export default App
