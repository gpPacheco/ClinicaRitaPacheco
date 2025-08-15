import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { getMongoClient } from "@/lib/db"
import { compare } from "bcrypt"

const adapter = process.env.MONGODB_URI ? (MongoDBAdapter(getMongoClient() as any) as any) : undefined
const auth = NextAuth({
  adapter,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const client = await getMongoClient()
        const db = client.db(process.env.MONGODB_DB)
        const user = await db.collection("users").findOne({ email: credentials.email })
        if (!user?.passwordHash) return null
        const ok = await compare(credentials.password, user.passwordHash)
        if (!ok) return null
        return { id: String(user._id), name: user.name, email: user.email, image: user.image, role: user.role || "user" }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role || "user"
      return token
    },
    async session({ session, token }) {
      ;(session as any).role = token.role
      return session
    },
  },
})

export const { GET, POST } = auth
