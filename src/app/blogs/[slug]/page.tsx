"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

export default function BlogPage() {
  const { slug } = useParams() as { slug: string };

  const DynamicBlog = dynamic(() => import(`@/markdowns/${slug}.mdx`), {
    ssr: false
  });

  return (
    <div className="prose prose-a:text-blue-600 w-full max-w-none">
      <DynamicBlog />
    </div>
  );
}
