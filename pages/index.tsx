import { NextPage, NextPageContext } from 'next';

import { Router, useRouter } from 'next/router'

import { useSession, getSession } from 'next-auth/client'

import dynamic from "next/dynamic";
const SignIn = dynamic(() => import("../src/Pages/SignIn"));

import Head from 'next/head'
import { useEffect } from 'react';

import Dashboard from '../src/Pages/Dashboard'

interface HomeProps {
  loggedIn: boolean
}

const Home: NextPage<HomeProps> = ({loggedIn, ...props}) => {
  const { replace } = useRouter()

  useEffect(() => {
    if (loggedIn) return;
    replace("/", "/signin", { shallow: true });
  }, [loggedIn]);

  return (
    <>
      <Head>
        <title>Move it</title>
      </Head>
      {!loggedIn && <SignIn/>}
      {loggedIn && <Dashboard/>}
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const session = await getSession()

  return {
    loggedIn: !!session
  }
};

export default Home