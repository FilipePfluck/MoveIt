import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;

    span{
        font-size: 16px;
    }

    >div{
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: ${({theme})=> theme.colors.grayLine};
        margin: 0 20px;
        position: relative;

        > div{
            height: 4px;
            border-radius: 4px;
            background-color: ${({theme})=> theme.colors.green};
            transition: 1s;
        }

        span{
            position: absolute;
            top: 12px;
            transform: translateX(-50%);
            transition: 1s;
        }
    }

    @media(max-width: 1100px){
        margin-bottom: 24px;
    }
`