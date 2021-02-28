import * as S from './styles'

const ListItem = () => {
    return(
        <S.Container>
            <S.NumberContainer>
                <p>1</p>
            </S.NumberContainer>
            <S.Content>
                <S.User>
                    <img src="http://github.com/diego3g.png" alt=""/>
                    <div>
                        <strong>Diego Fernandes</strong>
                        <div>
                            <img src="/icons/level.svg" alt="level"/>
                            <p>Level 43</p>
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