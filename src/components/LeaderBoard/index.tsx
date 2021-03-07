import { useContext, useEffect } from 'react'

import { UsersContext } from '../../contexts/UsersContext'

import ListItem from '../../components/ListItem'

import * as S from './styles'


const Leaderboard = () => {
    const { users } = useContext(UsersContext)

    useEffect(()=>{
        console.log('leaderboard', users)
    },[users])

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
                {users.map(user => {
                    return(
                        <ListItem user={user}/>
                    )
                })}
            </S.Container>
    )
}

export default Leaderboard