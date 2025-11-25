import { useContext } from 'react';

export default function GameProvider() {
    function gameReducer(state, action) {

        let newState = state;
        if (action.type == 'CLICK_SHOOT') {
            newState = { ...state, damageDealt: state.damageDealt + 1 }
        }

        return newState;
    }
}