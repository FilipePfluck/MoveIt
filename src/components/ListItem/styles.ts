import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 80px;
    background-color: ${({theme}) => theme.colors.white};
    margin-top: 24px;
    border-radius: 8px;
`

export const NumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    width: 60px;

    border-radius: 8px 0 0 8px;

    border-right: 4px solid ${({theme}) => theme.colors.background};
`

export const Content = styled.div`
    height: 80px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    padding-right: 24px;
`

export const User = styled.div`
    display: flex;
    flex-direction: row;

    > img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;

        margin-left: 16px;

        strong{
            font-size: 18px;
            color: ${({theme}) => theme.colors.title};

            margin-bottom: 8px;
        }

        div{
            display: flex;
            flex-direction: row;

            p{
                margin-left: 8px;
            }
        }
    }
`

export const InfoContainer = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;

    @media(max-width: 800px){
        display: none;
    }
`

export const Info = styled.div`
    display: flex;

    strong{
        color: ${({theme}) => theme.colors.blue};
        margin-right: 16px;
    }
`