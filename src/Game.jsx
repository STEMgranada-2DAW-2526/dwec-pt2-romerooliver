import { useReducer, useState } from 'react'
import { GameContext } from './GameProvider';
import './App.css'



export default function Game() {
;
    const { state, changeState } = useContext(GameContext);


    return (
        <div >
            <button onClick={() => changeState("CLICK_SHOOT")}>DISPARAR</button>
        </div>
    )
}