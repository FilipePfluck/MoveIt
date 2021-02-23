import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 

    margin: 48px 0px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({theme}) => theme.colors.darkText};

    font-weight: 500;

    span{
        font-size: 20px;
        color: ${({theme}) => theme.colors.darkText};
    }
`