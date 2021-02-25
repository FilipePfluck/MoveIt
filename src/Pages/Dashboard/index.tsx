import * as S from './styles'

import ExperienceBar from '../../components/ExperienceBar'
import Profile from '../../components/Profile'
import CompletedChallenges from '../../components/CompletedChallenges'
import CountDown from '../../components/CountDown'
import ChallengeBox from '../../components/ChallengeBox'

const Dashboard = () => {
    return(
        <S.Container>
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