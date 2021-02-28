import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { NextApiHandler } from 'next'

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  site: process.env.SITE,

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ]
};