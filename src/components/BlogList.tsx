"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
async function getBlogsContext(): Promise<Blog[]> {
  const blogs: Blog[] = await fetch("./api/blogs").then((res) => res.json());
  return blogs;
}

export default function BlogList() {
  const [active, setActive] = useState<(typeof blogs)[number] | boolean | null>(
    null
  );
  const [blogs, setBlogs] = useState([] as Blog[]);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getBlogsContext().then((blogs) => {
      setBlogs(
        blogs
          .sort(
            (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
          )
          .map((blog) => {
            return {
              ...blog,
              image: "/blogs" + blog.image,
            };
          })
      );
    });

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as any, () => setActive(null));

  function navigateToBlog(e: any): void {
    e.stopPropagation();
  }

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white p-4 rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain"
                />
              </motion.div>

              <div>
                <div className="flex flex-col">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                  >
                    {active.title}
                  </motion.h3>
                  <div className="flex flex-col gap-1 py-2">
                    <span className="text-gray-600">{active.desc}</span>
                    <div className="text-right mt-2">
                      <Button
                        className="bg-green-500 w-fit"
                        onClick={(e) => navigateToBlog(e)}
                      >
                        <Link href={`/blogs/${active.router}`}>
                          &#128073; 查看详情
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <motion.div className="flex flex-col gap-3 text-blue-400 py-2 text-sm">
                    参考资料：
                    {active.refers?.map((ref) => {
                      return (
                        <div
                          key={ref.title}
                          className="flex flex-row gap-1 items-center justify-between"
                        >
                          <span className="font-bold text-nowrap">
                            &#128216; {ref.title} ：
                          </span>
                          <a
                            href={ref.url}
                            target="_blank"
                            className="underline max-w-2/3 text-right"
                            style={{ flex: 1, wordWrap: "break-word" }}
                          >
                            {ref.url}
                          </a>
                        </div>
                      );
                    })}
                  </motion.div>
                  <motion.div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1 items-center">
                      {active.tags.map((tag) => {
                        return (
                          <Badge
                            key={tag}
                            className="p-1 bg-blue-400 min-w-10 flex justify-center"
                          >
                            {tag}
                          </Badge>
                        );
                      })}
                      <span className="text-gray-500 text-sm ml-auto px-1">
                        {formatter.format(new Date(active.time))}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-8 overflow-y-auto items-center p-4">
        {blogs.map((blog, index) => (
          <motion.div
            layoutId={`card-${blog.title}-${id}`}
            key={blog.title}
            onClick={() => setActive(blog)}
            className="p-4 flex h-[400px] flex-col bg-white rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full h-full">
              <motion.div layoutId={`image-${blog.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={blog.image}
                  alt={blog.title}
                  className="h-60 w-full rounded-lg object-contain"
                />
              </motion.div>
              <div className="flex items-center flex-1 justify-between flex-col">
                <motion.h3
                  layoutId={`title-${blog.title}-${id}`}
                  className="font-bold w-full text-neutral-800 text-left md:text-left text-lg"
                >
                  {blog.title}
                </motion.h3>
                <motion.div layout className="flex flex-col w-full gap-1">
                  <div className="flex flex-row justify-between w-full gap-1 items-center">
                    {blog.tags.map((tag) => {
                      return (
                        <Badge
                          key={tag}
                          className="p-1 bg-blue-400 min-w-10 flex justify-center"
                        >
                          {tag}
                        </Badge>
                      );
                    })}
                    <span className="text-gray-500 text-sm ml-auto px-1">
                      {formatter.format(new Date(blog.time))}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
