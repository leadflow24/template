import NextAuth from 'next-auth'

import { auth } from '@/lib/auth'

const {
  handler: { GET, POST },
} = NextAuth(auth)

export { GET, POST }
