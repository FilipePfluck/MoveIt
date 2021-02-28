import { NextPage } from 'next';

import { useSession, getSession } from 'next-auth/client'

import { Router, useRouter } from 'next/router'

import Head from 'next/head'
import { useEffect } from 'react';

import SignIn from '../src/Pages/SignIn'

import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("../src/Pages/Dashboard"));

interface SignInProps {
    loggedIn: boolean
  }

const SignInPage: NextPage<SignInProps> = ({loggedIn, ...props}) => {
    const { replace } = useRouter()

    useEffect(() => {
        if (!loggedIn) return;
        replace("/signin", "/", { shallow: true });
      }, [loggedIn]);

    return (
        <>
            {!loggedIn && <SignIn/>}
            {loggedIn && <Dashboard/>}
        </>
    )
}

SignInPage.getInitialProps = async (ctx) => {
    const session = await getSession()

    return {
        loggedIn: !!session
    }
}

export default SignInPage