import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cache } from "react";
import { prisma } from '../../lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
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
    ],
    secret: process.env.AUTH_SECRET
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // 客户端使用相对路径
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // 生产环境
  return `http://localhost:3000`; // 开发环境
};

export const fetchBlog = cache(async (slug: string) => {
  const res = await fetch(`${getBaseUrl()}/api/blog/${slug}`);
  return res.json();
});
