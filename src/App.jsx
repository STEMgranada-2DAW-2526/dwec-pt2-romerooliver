import { useState } from 'react'
import GameProvider from './GameProvider'
import './App.css'

const INITIAL_STATE = {
  damageDealt: 0,
  waveGoal:100,
  caramels:20,
  damagePerShot:1,
  autoShotsPerShot:1,
  upgrades:[],
}

function Game() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GameProvider>
      <Game/>
    </GameProvider>
    </>
  )
}

export default Game
