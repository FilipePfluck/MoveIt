import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'
import { CountdDownContext } from '../../contexts/CountdDownContext'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import * as S from './styles'

const ChallengeBox = () => {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengeContext)
    const {resetTimer} = useContext(CountdDownContext)

    return(
        <S.Container>
            <AnimateSharedLayout>
                {activeChallenge ? (
                    <S.Active layout layoutId={'challenge'}>
                        <header>Ganhe {activeChallenge.amount} de XP</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <S.Button 
                                type="button" 
                                color="red"
                                onClick={()=> {resetChallenge(); resetTimer()}}
                            >
                                Falhei
                            </S.Button>
                            <S.Button 
                                type="button" 
                                color="green"
                                onClick={()=> {completeChallenge(); resetTimer()}}
                            >
                                Completei
                            </S.Button>
                        </footer>
                    </S.Active>
                ): (
                    <AnimatePresence>
                        <S.NotActive layout layoutId={'challenge'}>
                            <strong>Finalize um ciclo para receber um desafio</strong>
                            <p>
                                <img src="icons/level-up.svg" alt="Level Up"/>
                                Avance de level completando desafios
                            </p>
                        </S.NotActive> 
                    </AnimatePresence>
                )}
            </AnimateSharedLayout>
        </S.Container>
    )
}

export default ChallengeBox