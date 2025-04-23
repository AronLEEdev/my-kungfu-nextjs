import BlogList from "@/components/BlogList";
import { Footer } from "@/components/Footer";
import { prisma } from "../../../lib/prisma";

export async function generateMetadata() {
  const blogs = await prisma.blog.findMany({ select: { tags: true } });
  const dynamicKeywords = blogs.flatMap((blog) => blog.tags);

  return {
    title: "Blogs - My KungFu",
    description: "Explore a collection of blogs documenting coding challenges, solutions, and insights. Click on a blog to read more.",
    keywords: ["blogs", "coding", "solutions", "programming", "My KungFu", ...dynamicKeywords]
  };
}

export default async function Blogs() {
  return (
    <div className="absolute bg-gray-100 left-0 right-0 top-0 px-4">
      <div className="font-bold text-2xl text-center p-4">
        &#128221; 我的博客空间
      </div>
      <div className="text-sm text-gray-500 text-center mb-4">
        记录下coding中遇到的各类问题，点击可查看详情，再次点击即可返回
      </div>
      <BlogList />
      <Footer />
    </div>
  );
}
