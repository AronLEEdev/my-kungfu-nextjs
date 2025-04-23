import { authOptions } from "@/lib/utils"; 
import NextAuth from "next-auth";

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } // export GET and POST methods for NextAuth