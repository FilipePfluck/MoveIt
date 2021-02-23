import * as S from './styles'

import ExperienceBar from '../../components/ExperienceBar'
import Profile from '../../components/Profile'
import CompletedChallenges from '../../components/CompletedChallenges'
import CountDown from '../../components/CountDown'

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
            </S.Section>
        </S.Container> 
    )
}

export default Dashboard