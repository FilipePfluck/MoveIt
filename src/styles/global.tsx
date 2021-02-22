import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font: 400 16px 'Inter', sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle