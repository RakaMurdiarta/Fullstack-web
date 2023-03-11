import React, { createContext, useReducer } from 'react'
import { useContext } from 'react'
import { useBearStore } from './store'

const useValueContex = createContext()

// const val = useBearStore((state) => state.value)


const InitialState = {
    value: 0
}

const Actions = {
    KALI_DUA: `kali_dua`,
    SET_VALUE: `set_value`,
    KUADRAT: `kuadrat`,
    BAGI: `bagi`

}

const reducer = (state, action) => {

    if (action.type === Actions.SET_VALUE) {

        return { ...state, value: action.payload.nilai }
    }

    if (action.type === Actions.KALI_DUA) {

        return { ...state, value: state.value * 2 }
    }

    if (action.type === Actions.KUADRAT) {

        return { ...state, value: state.value ** 2 }
    }

    if (action.type === Actions.BAGI) {

        return { ...state, value: state.value / 2 }
    }

}

export const Contex = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, InitialState)

    const times2 = () => {
        dispatch({ type: Actions.KALI_DUA })
    }

    const kuadrat = () => {
        dispatch({ type: Actions.KUADRAT })
    }


    const set_values = (nilai) => {

        dispatch({ type: Actions.SET_VALUE, payload: { nilai: nilai } })
    }

    const bagi = () => {
        dispatch({ type: Actions.BAGI })
    }




    return (
        <useValueContex.Provider value={{ ...state, times2, set_values, kuadrat, bagi }}>
            {children}
        </useValueContex.Provider>
    )
}

export const useValue = () => {
    return useContext(useValueContex)
}
