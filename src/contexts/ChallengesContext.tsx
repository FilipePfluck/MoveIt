import { createContext, useState, useEffect, useCallback, useMemo } from 'react'

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
    completeChallenge: ()=>void,
    closeLevelUpModal: ()=>void
    isLevelUpModalOpened: boolean
}

export const ChallengeContext = createContext({} as ContextValue)


export function ChallengesProvider({children}){

    const [level, setLevel] = useState(()=>{
        if (typeof window !== "undefined"){
            const level = localStorage.getItem('@MoveIt:level')

            if(level){
                return JSON.parse(level)
            }else{
                return 1
            }
        }
    })

    const [currentExperience, setCurrentExperience] = useState(()=>{
        if (typeof window !== "undefined"){
            const storagedExperience = localStorage.getItem('@MoveIt:currentExperience')

            if(storagedExperience){
                return JSON.parse(storagedExperience)
            }else{
                return 0
            }
        }
    })
    
    const [challengesCompleted, setChallengesCompleted] = useState(()=>{
        if (typeof window !== "undefined"){
            const storagedChallenges = localStorage.getItem('@MoveIt:challengesCompleted')

            if(storagedChallenges){
                return JSON.parse(storagedChallenges)
            }else{
                return 0
            }
        }
    })

    const [activeChallenge, setActiveChallenge] = useState(null)

    const [isLevelUpModalOpened, setIsLevelUpModalOpened] = useState(false)

    const experienceToNextLevel = useMemo(()=>{
        return Math.pow((level+1) * 4, 2)
    }, [level]) 

    useEffect(()=>{
        Notification.requestPermission()
    },[])

    const startNewChallenge = useCallback(()=>{
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notificaion.mp3')

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount} xp`
            })
        }
    },[challenges])

    const resetChallenge = useCallback(() => {
        setActiveChallenge(null)
    },[])

    const completeChallenge = useCallback(() => {
        if(!activeChallenge){
            return
        }

        const { amount } = activeChallenge

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            setLevel(state => {
                localStorage.setItem('@MoveIt:level', JSON.stringify(state + 1))
                return state + 1
            })
            setIsLevelUpModalOpened(true)
            finalExperience = finalExperience - experienceToNextLevel
        }
        
        localStorage.setItem('@MoveIt:currentExperience', JSON.stringify(finalExperience))

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(state => {
            localStorage.setItem('@MoveIt:challengesCompleted', JSON.stringify(state + 1))
            return state + 1
        })
    },[activeChallenge, currentExperience, experienceToNextLevel])

    const closeLevelUpModal = useCallback(() => {
        setIsLevelUpModalOpened(false)
    }, [])

    const value: ContextValue = {
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        isLevelUpModalOpened,
        closeLevelUpModal
    }

    return(
        <ChallengeContext.Provider value={value}>
            {children}
        </ChallengeContext.Provider>
    )
}