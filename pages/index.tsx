import Head from 'next/head'

import Dashboard from '../src/Pages/Dashboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Move it</title>
      </Head>
      <Dashboard/>  
    </>
  )
}
