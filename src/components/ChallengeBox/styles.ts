import styled from 'styled-components'

import { motion } from 'framer-motion'

interface ButtonProps {
    color: 'green' | 'red'
}

export const Container = styled.div `
    height: 100%;

    background: ${({theme}) => theme.colors.white};
    border-radius: 8px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    padding: 24px 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

`   

export const NotActive = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    p{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
        max-width: 70%;
        margin: 24px auto;

        img{
            margin-bottom: 16px;
        }
    }

    strong{
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        max-width: 200px;
    }
`

export const Active = styled(motion.div)`
    height: 100%;
    display: flex;
    flex-direction: column;

    header { 
        color: ${({theme}) => theme.colors.blue};
        font-weight: 600;
        font-size: 20px;
        padding: 0 32px 24px;
        border-bottom: 1px solid ${({theme}) => theme.colors.grayLine};
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
        strong{
            font-size: 32px;
            font-weight: 600;
            color: ${({theme}) => theme.colors.title};
        }

        p{
            line-height: 20px;
        }

        img{
            @media(max-width: 800px){
                margin: 24px 0;
            }
        }
    }
    
    footer{ 
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        @media(max-width: 800px){
                margin-top: 24px;
        }
    }
`

export const Button = styled.button<ButtonProps>`
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 8px;
    outline: 0;
    border: 0;

    background: ${props => props.color === 'green' 
        ? props.theme.colors.green 
        : props.theme.colors.red
    };

    color: ${({theme}) => theme.colors.text}; 

    transition: 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`