import styled from 'styled-components'

export const Wrap = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: row;

    @media(max-width: 900px){
        flex-direction: column;
    }
`

export const Container = styled.div`

    min-height: 100vh;
    width: 100%;
    max-width: 992px;
    margin: 0 auto;
    padding: 20px 16px;

    display: flex;
    flex-direction: column;

    @media(max-width: 1000px){
        padding: 24px;
    }
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