import { useEffect, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'

import { PrismaClient } from '@prisma/client'

import Sidebar from '../../components/SideBar'
import Dashboard from '../../components/Dashboard'
import Leaderboard from '../../components/LeaderBoard'

import * as S from './styles'
import { User } from 'next-auth'

interface Props {
    users: User[]
}

const Home: NextPage<Props> = ({users}) => {
    const [selected, setSelected] = useState('dashboard')

    useEffect(()=>{
        console.log('a',users)
    },[users])

    return(
        <S.Wrap>
            <Sidebar selected={selected} setSelected={setSelected}/>

            {selected === 'dashboard' && <Dashboard/>}
            {selected === 'leaderboard' && <Leaderboard/>}

        </S.Wrap>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async({req, res}) => {

    const prisma = new PrismaClient()

    const session = await getSession()

    if (!session) {
        res.statusCode = 403
        return { props: { users: [] } }
      }

    const users = await prisma.user.findMany()

    console.log(users)

    return{
        props: {
            users
        }
    }
}

export default Home