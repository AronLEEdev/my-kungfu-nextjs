'use client'
import { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
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
            setBlogs(blogs.map((blog => {
                return {
                    ...blog,
                    image: '/blogs' + blog.image
                }
            })));
            setLoading(false);
        })
    }, [])

    if (loading) {
        return (
            <div className='w-full h-lvh flex justify-center items-center'>
                <LifeLine color="#32cd32" size="large" text="Loading" textColor="#32cd32" />
            </div>
        )
    }
    return (
        <div>
            <div className="flex flex-col">
                {
                    blogs.map((blog: Blog) => {
                        return (
                            <BlogCard key={blog.id} blog={blog} />
                        )
                    })
                }
            </div>
        </div>
    )
}
