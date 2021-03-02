import { useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import WithAuthentication from '../../components/AuthHOC'

import Sidebar from '../../components/SideBar'
import Dashboard from '../../components/Dashboard'
import Leaderboard from '../../components/LeaderBoard'

import * as S from './styles'
import { User } from 'next-auth'

interface Props {
    users: User[]
}

import { useEffect } from 'react'

import { getSession, Session } from 'next-auth/client'

import { PrismaClient } from '@prisma/client'


interface Props {
    users: User[]
}

interface RefactoredUser {
    id: number
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

const Home: NextPage/* <Props> */ = (props) => {
    const [selected, setSelected] = useState('dashboard')

    return(
        <S.Wrap>
            <Sidebar selected={selected} setSelected={setSelected}/>

            {selected === 'dashboard' && <Dashboard/>}
            {selected === 'leaderboard' && <Leaderboard/>}

        </S.Wrap>
    )
}

export default Home