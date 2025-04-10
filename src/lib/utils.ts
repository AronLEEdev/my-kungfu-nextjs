import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cache } from "react";

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
