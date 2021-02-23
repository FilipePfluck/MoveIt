import * as S from './styles'

const Profile = () => {
    return(
        <S.Container>
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes"/>
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </S.Container>
    )
}

export default Profile