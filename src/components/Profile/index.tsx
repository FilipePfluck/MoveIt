import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'

import {
    useSession, signIn, signOut, Session
  } from 'next-auth/client'

import * as S from './styles'

const Profile = () => {
    const { level } = useContext(ChallengeContext)

    const [session, loading] = useSession()

    if(loading){
        return(
            <S.Container>
                <div style={{width: 80, height: 80, borderRadius: '50%', backgroundColor: '#2D3138'}}/>
                <div>
                    <strong style={{width: 100, height: 40, backgroundColor: '#2D3138'}}/>
                </div>
            </S.Container>
        )
    }

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