import { useContext, useMemo } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'

import * as S from './styles'

const ExperienceBar = () => {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext)

    const percentage = useMemo(()=>{
        return currentExperience/experienceToNextLevel * 100
    },[currentExperience, experienceToNextLevel])

    return(
        <S.Container>
            <span>0 xp</span>
            <div> 
                <div style={{width: `${percentage}%`}}/>
                <span style={{left: `${percentage}%`}}>
                    {currentExperience}
                </span>
            </div>
            <span>{experienceToNextLevel}xp</span>
        </S.Container>
    )
}

export default ExperienceBar