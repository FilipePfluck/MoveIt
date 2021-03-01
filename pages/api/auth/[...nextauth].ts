import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'


import { NextApiHandler } from 'next'

const prisma = new PrismaClient()

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  site: process.env.SITE,

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
};