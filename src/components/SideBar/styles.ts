import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 80px;
    background: ${({theme}) => theme.colors.white};
    padding: 12px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 900px){
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 80px;
    }

    header{
        position: absolute;
        top: 16px;
        left: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;

        svg{
            margin-top: 16px;
            cursor: pointer;
            transition: 0.2s;

            &:hover{
                filter: brightness(0.8);
            }
        }
    }

    div{
        display: flex;
        flex-direction: column;

        svg{
            margin: 16px 0;
            cursor: pointer;
            transition: 0.2s;

            &:hover{
                filter: brightness(0.8);
            }
        }

        @media(max-width: 900px){
            flex-direction: row;

            svg{
                margin: 0 16px;
            }
        }
    }
`