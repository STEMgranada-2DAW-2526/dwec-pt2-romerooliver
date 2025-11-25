import { useState } from 'react'

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

    </>
  )
}

export default Game
