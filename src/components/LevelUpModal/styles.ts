import styled from 'styled-components'

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    background: ${({theme}) => theme.colors.white};
    width: 100%;
    max-width: 400px;
    padding: 32px 48px;
    border-radius: 8px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;


    header{
        font-size: 136px;
        font-weight: 600;
        color: ${({theme}) => theme.colors.blue};
        background: url('/icons/levelup.svg') no-repeat center;
        background-size: contain;
    }

    strong{
        font-size: 32px;
        color: ${({theme}) => theme.colors.title};
    }

    p{
        font-size: 20px;
        color: ${({theme}) => theme.colors.text};
        margin-top: 4px;
    }

    button{
        position: absolute;
        top: 8px;
        right: 8px;

        background: none;
        border: 0;
        outline: 0;
    }
`

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;  
        opacity: 0.8; 
        background: ${({theme}) => theme.colors.background};
    }
`