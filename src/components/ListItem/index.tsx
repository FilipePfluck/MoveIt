import * as S from './styles'

interface User {
    name?: string,
    image?: string
    level?: number
}

interface ListItemProps {
    user: User
}

const ListItem: React.FC<ListItemProps> = ({user}) => {
    return(
        <S.Container>
            <S.NumberContainer>
                <p>1</p>
            </S.NumberContainer>
            <S.Content>
                <S.User>
                    <img src={user.image} alt=""/>
                    <div>
                        <strong>{user.name}</strong>
                        <div>
                            <img src="/icons/level.svg" alt="level"/>
                            <p>Level {user.level}</p>
                        </div>
                    </div>
                </S.User>
                <S.InfoContainer>
                    <S.Info>
                        <strong>127</strong>
                        <p>Completados</p>
                    </S.Info>
                    <S.Info>
                        <strong>1700</strong>
                        <p>xp</p>
                    </S.Info>
                </S.InfoContainer>
            </S.Content>
        </S.Container>
    )
}

export default ListItem