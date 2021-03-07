import { useEffect, useContext } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'

import { UsersContext } from '../src/contexts/UsersContext'

import RefactoredUser from '../src/dtos/RefactoredUser'

import Home from '../src/Pages/Home'
import { User } from 'next-auth'

interface Props {
    users: RefactoredUser[],
    userId?: number,
    currentUser?: RefactoredUser
}

const HomePage: NextPage<Props> = ({users,currentUser, userId}) => {
    const { setUsers, setCurrentUser } = useContext(UsersContext)

    useEffect(()=>{
        setUsers(users)
        setCurrentUser(currentUser)
    },[users, currentUser])

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

        const currentUserId = session.userId
    
        const users = await prisma.user.findMany()

        const currentUser = await prisma.user.findFirst({
            where: {
                id: currentUserId
            }
        })

        console.log('currentUser',currentUser)

        const refactoredUsers: RefactoredUser[] = users.map((u) => {
            return {
                id: u.id, 
                name: u.name, 
                email: u.email, 
                image: u.image,
                level: u.level
            }
        })

        const refactoredCurrentUser: RefactoredUser = {
            id: currentUserId,
            email: currentUser.email,
            name: currentUser.name,
            image: currentUser.image,
            level: currentUser.level
        }

        return {
            props: {
                users: refactoredUsers,
                userId: currentUserId,
                currentUser: refactoredCurrentUser
            }
        }
    
}

export default HomePage

