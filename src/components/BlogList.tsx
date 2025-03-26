'use client'
import { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
async function getBlogsContext(): Promise<Blog[]> {
    const blogs: Blog[] = await fetch("./api/blogs").then((res) => res.json());
    return blogs;
}
export default function BlogList() {
    const [blogs, setBlogs] = useState([] as Blog[]);
    useEffect(() => {
        getBlogsContext().then((blogs) => {
            setBlogs(blogs.map((blog => {
                return {
                    ...blog,
                    image: '/blogs' + blog.image
                }
            })));
        })
    }, [])
    return (
        <div className="flex flex-col gap-4">
            {
                blogs.map((blog: Blog) => {
                    return (
                        <BlogCard key={blog.id} blog={blog} />
                    )
                })
            }
        </div>
    )
}
