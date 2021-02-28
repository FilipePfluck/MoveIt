import { useContext, useEffect } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'

import {
    useSession, signIn, signOut, Session
  } from 'next-auth/client'

import { Router, useRouter } from 'next/router'

import * as S from './styles'

import ExperienceBar from '../../components/ExperienceBar'
import Profile from '../../components/Profile'
import CompletedChallenges from '../../components/CompletedChallenges'
import CountDown from '../../components/CountDown'
import ChallengeBox from '../../components/ChallengeBox'
import LevelUpModal from '../../components/LevelUpModal'
import SideBar from '../../components/SideBar'

const Dashboard = () => {
    const router = useRouter()

    const { isLevelUpModalOpened } = useContext(ChallengeContext)

    const [ session, loading ] = useSession()

   /*  useEffect(()=>{
        if(!loading && !session){
            router.push('/signin')
        }
    },[session, loading]) */

    return(
        <S.Wrap>
            <SideBar/>
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
        </S.Wrap> 
    )
}

export default Dashboard