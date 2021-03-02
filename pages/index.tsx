import { useEffect, useContext } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'

import { UsersContext } from '../src/contexts/UsersContext'

import Home from '../src/Pages/Home'

interface Props {
    users: RefactoredUser[]
}

interface RefactoredUser {
    id: number
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

const HomePage: NextPage<Props> = ({users}) => {
    const { setUsers } = useContext(UsersContext)

    useEffect(()=>{
        setUsers(users)
    },[users])

    return(
        <Home/>
    )
}

export const getServerSideProps: GetServerSideProps <Props> = async({req, res}) => {

    const prisma = new PrismaClient()

    const session = await getSession({req})

    if (!session) {
        res.statusCode = 403
        return { props: { users: [] } }
    }

    const users = await prisma.user.findMany()

    const refactoredUsers: RefactoredUser[] = users.map((u) => {
        return {
            id: u.id, 
            name: u.name, 
            email: u.email, 
            image: u.image
        }
    })

    return {
        props: {
            users: refactoredUsers
        }
    }
}

export default HomePage

