import styled from 'styled-components'

export const Container = styled.div`

    min-height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 20px 16px;

    display: flex;
    flex-direction: column;
`

export const Section = styled.section`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-content: center;

    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
    }
`

export const Left = styled.div`

`

export const Right = styled.div`

`