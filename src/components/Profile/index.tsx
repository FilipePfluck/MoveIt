import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'

import * as S from './styles'

const Profile = () => {
    const { level } = useContext(ChallengeContext)

    return(
        <S.Container>
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes"/>
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </S.Container>
    )
}

export default Profile