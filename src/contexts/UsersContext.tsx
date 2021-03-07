import { User } from 'next-auth'
import { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react'

import RefactoredUser from '../dtos/RefactoredUser'

interface ContextValue { 
    users: RefactoredUser[]
    setUsers: Dispatch<SetStateAction<RefactoredUser[]>>
    currentUser: RefactoredUser, 
    setCurrentUser: Dispatch<SetStateAction<RefactoredUser>>
}

export const UsersContext = createContext({} as ContextValue)

export function UsersProvider({children}){

    const [ users, setUsers ] = useState<RefactoredUser[]>(null)

    const [ currentUser, setCurrentUser ] = useState<RefactoredUser>(null)

    const value: ContextValue = {
        users,
        setUsers,
        currentUser, 
        setCurrentUser
    }

    return(
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    )
}