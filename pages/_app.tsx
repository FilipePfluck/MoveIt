import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Provider } from 'next-auth/client';

import { ChallengeContext, ChallengesProvider } from '../src/contexts/ChallengesContext'
import { CountdDownsProvider} from '../src/contexts/CountdDownContext'

import theme from '../src/styles/themes/dark'

import GlobalStyle from '../src/styles/global'
import CountDown from '../src/components/CountDown'
import LevelUpModal from '../src/components/LevelUpModal'

export default function App({ Component, pageProps }) {
  const { session } = pageProps

  return (
    <>
      <Provider session={session}>
        <ChallengesProvider>
          <CountdDownsProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          </CountdDownsProvider>
        </ChallengesProvider>
      </Provider>
    </>
  )
}
