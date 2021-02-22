import * as S from './styles'

const ExperienceBar = () => {
    return(
        <S.Container>
            <span>0 xp</span>
            <div> 
                <div style={{width: '60%'}}/>
                <span style={{left: '60%'}}>360xp</span>
            </div>
            <span>600px</span>
        </S.Container>
    )
}

export default ExperienceBar