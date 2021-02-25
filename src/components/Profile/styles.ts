import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    div{
        margin-left: 20px;

        strong{
            font-size: 24px;
            font-weight: 600;
            color: ${({theme}) => theme.colors.title}
        }

        p{
            font-size: 16px;
            margin-top: 8px;

            img{
                height: 16px;
                width: 16px;

                margin-right: 8px;
            }
        }
    }

    @media(max-width: 800px){
        margin-top: 48px;
    }
`