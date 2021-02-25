import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { ChallengeContext, ChallengesProvider } from '../src/contexts/ChallengesContext'
import { CountdDownsProvider} from '../src/contexts/CountdDownContext'

import theme from '../src/styles/themes/dark'

import GlobalStyle from '../src/styles/global'
import CountDown from '../src/components/CountDown'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <ChallengesProvider>
        <CountdDownsProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </CountdDownsProvider>
      </ChallengesProvider>
    </>
  )
}
