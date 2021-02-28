import React from 'react';
import {useRouter} from 'next/router';
import { getSession } from 'next-auth/client'

const login = '/signin'; // Define your login route address.


export default WrappedComponent => {    
  const {replace} = useRouter()

  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const session = getSession()

    // Are you an authorized user or not?
    if (!session) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context});
      return { ...wrappedProps};
    }

    return {};
  };

  return hocComponent;
};