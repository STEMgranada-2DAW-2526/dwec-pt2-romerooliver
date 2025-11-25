import { useState } from 'react'
import { GameProvider } from './GameProvider';
import './App.css'


export default function Tablero() {

    const {  } = useContext(GameProvider);


    return (
        <div >
            <button onClick={() => dispatch({ type: 'CLICK_SHOOT' })}>DISPARAR</button>
        </div>
    )
}