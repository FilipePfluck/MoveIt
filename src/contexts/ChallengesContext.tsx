import { createContext, useState, Dispatch, SetStateAction } from 'react'

import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ContextValue { 
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    startNewChallenge: ()=> void,
    activeChallenge: Challenge,
    resetChallenge: ()=>void,
    experienceToNextLevel: number,
    resetTimer: ()=>void,

    time: number,
    setTime: Dispatch<SetStateAction<number>>,
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>,
    hasFinished: boolean,
    setHasFinished: Dispatch<SetStateAction<boolean>>
}

export const ChallengeContext = createContext({} as ContextValue)


export function ChallengesProvider({children}){
    const minutes = 0.1

    const [time, setTime] = useState(minutes * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level+1) * 4, 2)

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function resetTimer(){
        setTime(minutes * 60)
        setIsActive(false)
        setHasFinished(false)
    }

    const value: ContextValue = {
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        resetChallenge,
        time,
        setTime,
        hasFinished,
        setHasFinished, 
        isActive,
        setIsActive,
        resetTimer
    }

    return(
        <ChallengeContext.Provider value={value}>
            {children}
        </ChallengeContext.Provider>
    )
}