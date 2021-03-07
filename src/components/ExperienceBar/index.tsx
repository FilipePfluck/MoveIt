import { useContext, useMemo, useEffect, useState } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'
import { UsersContext } from '../../contexts/UsersContext'

import * as S from './styles'

const ExperienceBar = () => {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext)

    const { currentUser } = useContext(UsersContext)

    const [percentage, setPercentage] = useState(0)

    useEffect(()=>{
        setPercentage(Math.round(currentUser && currentUser.xp/experienceToNextLevel * 100))
    },[currentUser, experienceToNextLevel])

    return(
        <S.Container>
            <span>0 xp</span>
            <div> 
                <div style={{width: `${percentage}%`}}/>
                <span style={{left: `${percentage}%`}}>
                    {currentUser && currentUser.xp}
                </span>
            </div>
            <span>{experienceToNextLevel}xp</span>
        </S.Container>
    )
}

export default ExperienceBar