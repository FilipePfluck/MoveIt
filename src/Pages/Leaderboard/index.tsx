import { useEffect } from 'react'
import { useRouter } from 'next/router'

import {
    useSession, signIn, signOut, Session
  } from 'next-auth/client'

import SideBar from '../../components/SideBar'
import ListItem from '../../components/ListItem'

import * as S from './styles'


const Leaderboard = () => {
    const router = useRouter()

    const [ session, loading ]= useSession()

    useEffect(()=>{
        if(!loading && !session){
            router.push('/signin')
        }
    },[session, loading])

    return (
        <S.Wrap>
            <SideBar/>
            <S.Container>
                <S.Title>Leaderboard</S.Title>
                <S.ListLabelsContainer>
                    <div>
                        <span>POSIÇÃO</span>
                        <span>USUÁRIO</span>
                    </div>
                    <div style={{width: '30%', display: 'flex', justifyContent: 'space-between'}}>
                        <span>DESAFIOS</span>
                        <span>EXPERIÊNCIA</span>
                    </div>
                </S.ListLabelsContainer>
                <ListItem/>
                <ListItem/>
            </S.Container>
        </S.Wrap>
    )
}

export default Leaderboard