import { createContext, useState, Dispatch, SetStateAction} from 'react'

interface ContextValue {
    time: number,
    setTime: Dispatch<SetStateAction<number>>,
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>,
    hasFinished: boolean,
    setHasFinished: Dispatch<SetStateAction<boolean>>
    resetTimer: ()=>void,
}

export const CountdDownContext = createContext({} as ContextValue)

export function CountdDownsProvider({children}){
    const minutes = 25

    const [time, setTime] = useState(minutes * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    function resetTimer(){
        setTime(minutes * 60)
        setIsActive(false)
        setHasFinished(false)
    }
    
    const value: ContextValue = {
        time,
        setTime,
        isActive,
        setIsActive,
        hasFinished,
        setHasFinished,

        resetTimer
    }

    return(
        <CountdDownContext.Provider value={value}>
            {children}
        </CountdDownContext.Provider>
    )
}