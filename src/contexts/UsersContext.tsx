import { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react'


interface ContextValue { 
    users: RefactoredUser[]
    setUsers: Dispatch<SetStateAction<RefactoredUser[]>>
}

interface RefactoredUser {
    id: number
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

export const UsersContext = createContext({} as ContextValue)

export function UsersProvider({children}){

    const [ users, setUsers ] = useState<RefactoredUser[]>(null)

    const value: ContextValue = {
        users,
        setUsers
    }

    return(
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    )
}