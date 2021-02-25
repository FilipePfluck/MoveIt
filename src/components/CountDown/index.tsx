import { useCallback, useState, useEffect, useContext, useMemo } from 'react'

import { MdCheckCircle, MdPlayArrow, MdClose } from 'react-icons/md'

import { ChallengeContext } from '../../contexts/ChallengesContext'
import { CountdDownContext } from '../../contexts/CountdDownContext'

import * as S from './styles'

let countdownTimeout: NodeJS.Timeout

const CountDown = () => {
    const { 
        startNewChallenge
    } = useContext(ChallengeContext)

    const {
        time, 
        setTime, 
        isActive,
        setIsActive,
        hasFinished,
        setHasFinished,
        initialMinutes
    } = useContext(CountdDownContext)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = useMemo(()=>{
        return String(minutes).padStart(2,'0').split('')
    },[minutes]) 

    const [secondLeft, secondRight] = useMemo(()=>{
        return String(seconds).padStart(2,'0').split('')
    },[seconds]) 

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

    const AbandonCycle = useCallback(()=>{
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(initialMinutes * 60)
    },[])

    return(
        <div>
            <S.Container>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </S.Container>

            {hasFinished ? (
                <S.Button disabled>
                    Ciclo encerrado
                    <MdCheckCircle color="#4CD62B"/>
                </S.Button>
            ): (
                <>
                    {!isActive && (
                        <S.Button 
                            type="button"
                            onClick = {()=>setIsActive(true)}
                            isisActive={isActive}
                        >
                            Iniciar um ciclo
                            <MdPlayArrow/>
                        </S.Button>
                    )}
                    {isActive && (
                        <S.AbandonButton 
                            type="button"
                            onClick = {AbandonCycle}
                            isisActive={isActive}
                        >
                            Abandonar ciclo
                            <MdClose/>
                        </S.AbandonButton>
                    )}
                </>
            )}
        </div>
    )
}

export default CountDown