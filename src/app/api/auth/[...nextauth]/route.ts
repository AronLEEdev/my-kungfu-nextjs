import { prisma } from "../../../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            httpOptions: {
                timeout: 100000
            }
        })
    ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } // export GET and POST methods for NextAuth