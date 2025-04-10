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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

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

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
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
        className="box-border relative bg-gray-100 lg:grid lg:grid-cols-2 lg:gap-4 lg:overflow-y-auto lg:mb-4 lg:items-center"
        style={{ height: isMobile ? `${400 * blogs.length}px` : "100%" }}
      >
        {blogs.map((blog: Blog, index: number) => {
          return <BlogCard key={blog.id} blog={blog} index={index} />;
        })}
      </div>
    </div>
  );
}
