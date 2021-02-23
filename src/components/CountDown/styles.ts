import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${({theme}) => theme.colors.title};

    > div{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-evenly;

        background: ${({theme}) => theme.colors.white};
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        font-size: 136px;
        text-align: center;

        > span {
            flex: 1; 
        }
    }

    > div span:first-child{
        border-right: 2px solid ${({theme}) => theme.colors.background};
    }

    > span {
        font-size: 96px;
        margin: 0 8px;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 80px;
    margin-top: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.blue};
    color: #EDEDED;

    font-size: 20px;
    font-weight: 600;

    transition: 0.2s;

    outline: 0;

    &:hover{
        filter: brightness(0.8);
    }
`