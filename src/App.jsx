import React, { createContext, use, useEffect, useState } from 'react';
import { GameProvider } from './GameContext'
import { useContext } from 'react';
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
