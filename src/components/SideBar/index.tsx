import { FiHome, FiAward, FiLogOut } from 'react-icons/fi'

import { useRouter } from 'next/router'

import { useSession,signOut } from 'next-auth/client'

import * as S from './styles'
import { useCallback } from 'react'

const SideBar = () => {
    const router = useRouter()

    const [session, loading] = useSession()

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
                <FiHome size={28} color="#5965E0"/>
                <FiAward size={28}/>
            </div>
        </S.Container>
    )
}

export default SideBar