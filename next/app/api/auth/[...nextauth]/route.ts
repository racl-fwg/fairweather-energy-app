// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Example of role-based login (replace with actual database logic)
        const users = [
          { id: '1', name: 'Admin User', username: 'admin', password: 'adminpass', role: 'admin' },
          { id: '2', name: 'Installer User', username: 'installer', password: 'installpass', role: 'installer' },
          { id: '3', name: 'Client User', username: 'client', password: 'clientpass', role: 'client' },
        ]

        const user = users.find(
          (user) => user.username === credentials?.username && user.password === credentials?.password
        )

        if (user) {
          return user // Return the user object if found
        }

        return null // Return null if user not found
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role // Store the user's role in the token
      }
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role // Make role available in session
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
