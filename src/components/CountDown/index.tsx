import { useContext, useMemo } from 'react'

import { MdCheckCircle, MdPlayArrow, MdClose } from 'react-icons/md'

import { CountdDownContext } from '../../contexts/CountdDownContext'

import * as S from './styles'

const CountDown = () => {

    const {
        time, 
        setTime, 
        isActive,
        setIsActive,
        hasFinished,
        setHasFinished,
        initialMinutes,
        AbandonCycle,
    } = useContext(CountdDownContext)

    const [minuteLeft, minuteRight] = useMemo(()=>{
        const minutes = Math.floor(time / 60)
        return String(minutes).padStart(2,'0').split('')
    },[time]) 

    const [secondLeft, secondRight] = useMemo(()=>{
        const seconds = time % 60
        return String(seconds).padStart(2,'0').split('')
    },[time]) 

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