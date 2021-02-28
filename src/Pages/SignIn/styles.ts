import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${({theme}) => theme.colors.blue};

    display: grid;
    grid-template-columns: 1fr 1fr;


    @media(max-width: 800px){
        display: flex;
    }
`

export const Left = styled.div`
    height: 100%;

    img{
        height: 90%;
        width: 90%;
        margin: auto;
    }

    @media(max-width: 800px){
        display: none;
    }
`

export const Right = styled.div`
    height: 100%;
    
    padding: 64px;

    display: flex;
    align-items: center;

    > div{
        display: flex;
        flex-direction: column;

        > img{
            height: 100%;
            width: 100%;
        }

        strong{
            font-size: 32px;
            font-weight: 600;
            margin-top: 64px;
        }
    }

    @media(max-width: 800px){
        padding: 24px;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const GithubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 24px 0px; 

    p{
        margin-left: 16px;
    }
`

export const InputContainer = styled.form`
    height: 64px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    margin-top: 8px;

    div{
        flex: 1;
        background: linear-gradient(90deg, #4953B8, #5561D8);
        border-radius: 8px 0 0 8px;
        padding: 0 16px;

        input{
            height: 100%;
            width: 100%;
            background: none;
            border: 0;
            outline: 0;

            color: #FFF;

            &::placeholder{
                color: #FFF;
            }

            &:focus::placeholder {
                color: transparent;
            }
        }

        &:focus-within{
            border: 2px solid #414AA3;
        }
    }

    button{
        height: 64px;
        width: 64px;
        background-color: ${({theme}) => theme.colors.blueDark};
        padding: 16px;
        border-radius: 0 8px 8px 0;
        border: 0;
        outline: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

`