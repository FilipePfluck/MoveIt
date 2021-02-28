import {
    useSession, signIn, signOut, Session
  } from 'next-auth/client'

import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'

import { FiArrowRight } from 'react-icons/fi'

import * as S from './styles'

const SignIn = () => {
    const router = useRouter()

    const [ session, loading ] = useSession()

    useEffect(()=>{
        if(session){
            router.push('/')
        }
    },[session])

    return ( 
        <S.Container>
            <S.Left>
                <img src="/Simbolo.png" alt=""/>
            </S.Left>
            <S.Right>
                <div>
                    <img src="/logo-white.svg" alt="Move.it"/>

                    <strong>Bem vindo {session && session.user.name}</strong>
                    <S.GithubContainer>
                        <img src="/Github.svg" alt="Github"/>
                        <p>Faça login com seu github para começar</p>
                    </S.GithubContainer>

                    <S.InputContainer>
                        <div>
                            <input type="text" placeholder="Digite seu Username"/>
                        </div>
                        <button onClick={() => signIn('GitHub')}>
                            <FiArrowRight color="#FFF" size={24} />
                        </button>
                    </S.InputContainer>
                </div>
            </S.Right>
        </S.Container>
    )
}

export default SignIn