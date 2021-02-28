import { Dispatch, SetStateAction, useCallback } from 'react'
import { FiHome, FiAward, FiLogOut } from 'react-icons/fi'

import Link from 'next/link'

import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { signOut } from 'next-auth/client'

import * as S from './styles'


interface SideBarProps {
    selected: string
    setSelected: Dispatch<SetStateAction<string>>
}

const SideBar: NextPage<SideBarProps> = ({selected, setSelected}) => {
    const router = useRouter()

    const handleLogOut = useCallback(()=>{
        signOut()
        router.push('/signin')
    },[])

    return(
        <S.Container>
            <header>
                <img src="/Logo.svg" alt=""/>
                <FiLogOut size={28} onClick={handleLogOut}/>
            </header>
            <div>

                <FiHome 
                    size={28} 
                    color={selected === 'dashboard' && "#5965E0"}
                    onClick={()=>{setSelected('dashboard')}}
                />
                <FiAward 
                    size={28}
                    color={selected === 'leaderboard' && "#5965E0"}
                    onClick={()=>{setSelected('leaderboard')}}
                />

            </div>
        </S.Container>
    )
}

export default SideBar