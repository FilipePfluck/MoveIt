import { useContext } from 'react'
import { UsersContext } from '../../contexts/UsersContext'

import {
    useSession, signIn, signOut, Session
  } from 'next-auth/client'

import * as S from './styles'

const Profile = () => {
    const { currentUser } = useContext(UsersContext)

    const [loading] = useSession()

    return(
        <S.Container>
            <img 
                src={currentUser && `${currentUser.image}`} 
                alt={currentUser && currentUser.name}
            />
            <div>
                <strong>{currentUser && currentUser.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {currentUser && currentUser.level}
                </p>
            </div>
        </S.Container>
    )
}

export default Profile