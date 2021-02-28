import styled from 'styled-components'

export const Wrap = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: row;

    @media(max-width: 900px){
        flex-direction: column;
    }
`