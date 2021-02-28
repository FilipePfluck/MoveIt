import React, { useEffect } from 'react';
import { NextPage } from 'next';

import {useRouter} from 'next/router';
import { getSession, Session, useSession } from 'next-auth/client'

import dynamic from "next/dynamic";

const SignIn = dynamic(() => import("../../Pages/SignIn"));

const login = '/signin'; // Define your login route address.

interface WrapperProps {
  Component: NextPage,
  LoadingComponent?: NextPage
}

interface HocProps {
  session: Session,
}

const WithAuth = ({Component, LoadingComponent}: WrapperProps) => {

  const AuthHoc: NextPage/* <HocProps> */ = ({ /* session */ }) => {    
    const {replace} = useRouter()

    const [session, loading] = useSession()

    useEffect(()=>{
      if(!loading && !session){
        replace('','/signin')
      }
    },[session, loading])

    if(loading){
      return <Component/>
    }

    if(session){
      return(
        <Component/>
      )
    }else {
      return(
        <SignIn/>
      )
    }
  };

  /* AuthHoc.getInitialProps = async (context) => {
    const session = await getSession()

    return{
      session,
    }
  } */

  return AuthHoc
}

export default WithAuth