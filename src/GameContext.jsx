import { useContext } from 'react';
import React, { createContext, use, useEffect, useState } from 'react';


export const GameContext = createContext();

export function GameProvider({ children }) {

    const INITIAL_STATE = {
        damageDealt: 0,
        waveGoal: 100,
        caramels: 20,
        damagePerShot: 1,
        autoShotsPerShot: 1,
        upgrades: [],
    }

    const [state, setState] = useState(INITIAL_STATE);

    function changeState(action) {

        let newState;

        if (action == 'CLICK_SHOOT') {
            newState = { ...state, damageDealt: state.damageDealt + 1 }
        }else if (action == 'AUTO_SHOOT') {
            newState = { ...state, autoShotsPerShot: state.autoShotsPerShot + 1 }
        }else if (action == 'BUY_MULTIPLIER') {
            newState = { ...state, damageDealt: state.damageDealt + 1 }
        }else if (action == 'BUY_DAMANGE_UPGRADE') {
            newState = { ...state, damageDealt: state.damageDealt + 1 }
        }else if (action == 'NEXT_WAVE') {
            newState = { ...state, damageDealt: 0 }
        }

        setState(newState)
    }

    return (
        <GameContext.Provider value={{ state, changeState }}>
            {children}
        </GameContext.Provider>
    );
}