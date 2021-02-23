import { useCallback, useState, useEffect } from 'react'
import * as S from './styles'

const CountDown = () => {
    const [time, setTime] = useState(25 * 60)
    const [active, setActive] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')

    useEffect(()=>{
         if(active && time > 0){
             setTimeout(()=>{
                 setTime(state => state - 1)
             }, 1000)
         }
    },[active, time])

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
            <S.Button 
                type="button"
                onClick = {()=>setActive(true)}
            >
                Iniciar um ciclo
            </S.Button>
        </div>
    )
}

export default CountDown