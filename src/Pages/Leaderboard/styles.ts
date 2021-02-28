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
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;

    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 32px;
    color: ${({theme}) => theme.colors.title};
`

export const ListLabelsContainer = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin-top: 24px;

    div{
        span{
            color: ${({theme})=>theme.colors.text};
            font-size: 14px;
            margin-right: 16px;

            font-family: 'inter';
        }
    }

    @media(max-width: 800px){
        display: none;
    }
`
