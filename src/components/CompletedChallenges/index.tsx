import { useContext, useMemo } from 'react'
import { ChallengeContext } from '../../contexts/ChallengesContext'

import * as S from './styles'

const CompletedChallenges = () => {
    const { challengesCompleted } = useContext(ChallengeContext)

    return (
        <S.Container>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </S.Container>
    )
}

export default CompletedChallenges