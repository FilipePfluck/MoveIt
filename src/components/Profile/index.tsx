import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'

import {
    useSession, signIn, signOut, Session
  } from 'next-auth/client'

import * as S from './styles'

const Profile = () => {
    const { level } = useContext(ChallengeContext)

    const [session, loading] = useSession()

    return(
        <S.Container>
            <img src={session && `${session.user.image}`} alt={session && session.user.name}/>
            <div>
                <strong>{session && session.user.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </S.Container>
    )
}

export default Profile