import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'

import * as S from './styles'

import ExperienceBar from '../../components/ExperienceBar'
import Profile from '../../components/Profile'
import CompletedChallenges from '../../components/CompletedChallenges'
import CountDown from '../../components/CountDown'
import ChallengeBox from '../../components/ChallengeBox'
import LevelUpModal from '../../components/LevelUpModal'

const Dashboard = () => {
    const { isLevelUpModalOpened } = useContext(ChallengeContext)

    return(
            <S.Container>
                {isLevelUpModalOpened && <LevelUpModal/>}

                <ExperienceBar/>

                <S.Section>
                    <S.Left>
                        <Profile/> 
                        <CompletedChallenges/>
                        <CountDown/>
                    </S.Left>
                    <S.Right>
                        <ChallengeBox/>
                    </S.Right>
                </S.Section>
            </S.Container> 
    )
}

export default Dashboard