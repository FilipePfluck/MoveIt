import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'

import * as S from './styles'

const ChallengeBox = () => {
    const {activeChallenge, resetChallenge, resetTimer} = useContext(ChallengeContext)

    return(
        <S.Container>
            {activeChallenge ? (
                <S.Active>
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
                        <S.Button type="button" color="green">
                            Completei
                        </S.Button>
                    </footer>
                </S.Active>
            ): (
                <S.NotActive>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </S.NotActive> 
            )}
        </S.Container>
    )
}

export default ChallengeBox