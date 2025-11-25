import { useContext } from 'react';

export default function GameProvider(children) {

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
            console.log(state)
        }

        setState(newState)
    }

    return (
        <RuletaContext.Provider value={{ state, changeState }}>
            {children}
        </RuletaContext.Provider>
    );
}