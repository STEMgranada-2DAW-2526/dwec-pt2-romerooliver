import { useState } from 'react'
import { GameProvider } from './GameProvider'
import Game from './Game'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GameProvider>
      <Game />
    </GameProvider>
    </>
  )
}

export default Game
