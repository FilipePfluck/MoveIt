import { 
    createContext, 
    useState, 
    Dispatch, 
    SetStateAction, 
    useCallback, 
    useEffect,
    useContext
} from 'react'

import { ChallengeContext } from './ChallengesContext'

interface ContextValue {
    time: number,
    setTime: Dispatch<SetStateAction<number>>,
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>,
    hasFinished: boolean,
    setHasFinished: Dispatch<SetStateAction<boolean>>
    resetTimer: ()=>void,
    initialMinutes: number,
    AbandonCycle: () => void
}

export const CountdDownContext = createContext({} as ContextValue)

let countdownTimeout: NodeJS.Timeout

export function CountdDownsProvider({children}){
    const { startNewChallenge } = useContext(ChallengeContext)

    const initialMinutes = 25

    const [time, setTime] = useState(initialMinutes * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    useEffect(()=>{
        if(isActive && time > 0){
           countdownTimeout =  setTimeout(()=>{
                setTime(time - 1)
           }, 1000)
        }else if(isActive && time === 0){
            startNewChallenge()
            setHasFinished(true)
            setIsActive(false)
        }
    },[isActive, time])

    const resetTimer = useCallback(() => {
        setTime(initialMinutes * 60)
        setIsActive(false)
        setHasFinished(false)
    },[initialMinutes])

    const AbandonCycle = useCallback(()=>{
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(initialMinutes * 60)
    },[initialMinutes, countdownTimeout])

    const value: ContextValue = {
        time,
        setTime,
        isActive,
        setIsActive,
        hasFinished,
        setHasFinished,
        initialMinutes,
        resetTimer,
        AbandonCycle
    }

    return(
        <CountdDownContext.Provider value={value}>
            {children}
        </CountdDownContext.Provider>
    )
}