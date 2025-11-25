import { useReducer, useState } from 'react'
import GameProvider from './GameProvider';
import './App.css'

const INITIAL_STATE = {
  damageDealt: 0,
  waveGoal:100,
  caramels:20,
  damagePerShot:1,
  autoShotsPerShot:1,
  upgrades:[],
}


export default function Game() {

    const { gameReducer } = (GameProvider);

    return (
        <div >
            <button onClick={() => gameReducer(INITIAL_STATE,'CLICK_SHOOT')}>DISPARAR</button>
        </div>
    )
}