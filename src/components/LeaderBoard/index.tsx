import { useRouter } from 'next/router'

import ListItem from '../../components/ListItem'

import * as S from './styles'


const Leaderboard = () => {
    const router = useRouter()

    return (
            <S.Container>
                <S.Title>Leaderboard</S.Title>
                <S.ListLabelsContainer>
                    <div>
                        <span>POSIÇÃO</span>
                        <span>USUÁRIO</span>
                    </div>
                    <div style={{width: '30%', display: 'flex', justifyContent: 'space-between'}}>
                        <span>DESAFIOS</span>
                        <span>EXPERIÊNCIA</span>
                    </div>
                </S.ListLabelsContainer>
                <ListItem/>
                <ListItem/>
            </S.Container>
    )
}

export default Leaderboard