"use client";
import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import { LifeLine } from "react-loading-indicators";

async function getBlogsContext(): Promise<Blog[]> {
  const blogs: Blog[] = await fetch("./api/blogs").then((res) => res.json());
  return blogs;
}
export default function BlogList() {
  const [blogs, setBlogs] = useState([] as Blog[]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getBlogsContext().then((blogs) => {
      setBlogs(
        blogs
          .sort(
            (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
          )
          .map((blog) => {
            return {
              ...blog,
              image: "/blogs" + blog.image
            };
          })
      );
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-lvh flex justify-center items-center">
        <LifeLine
          color="#32cd32"
          size="large"
          text="Loading"
          textColor="#32cd32"
        />
      </div>
    );
  }
  return (
    <div>
      <div
        className="box-border relative bg-gray-100"
        style={{ height: `${380 * blogs.length}px` }}
      >
        {blogs.map((blog: Blog, index: number) => {
          return <BlogCard key={blog.id} blog={blog} index={index} />;
        })}
      </div>
    </div>
  );
}
