"use client";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
export function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { image, title, desc, time, tags, refers } = blog;
  const date = new Date(time);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
  const formattedDate = formatter.format(date);

  useEffect(() => {
    const el: HTMLElement | null = document.querySelector(`#blog${index}`);
    if (el) el.style.top = `${380 * index}px`;

    return () => {};
  }, []);

  function navigateToBlog(e: any): void {
    e.stopPropagation();
  }

  return (
    <motion.div
      layout
      style={{
        padding: isOpen ? "0" : "16px",
        height: isOpen ? "100vh" : "380px",
        zIndex: isOpen ? 100 : 20,
        top: isOpen ? "0" : `${380 * index}px`,
        position: isOpen ? "fixed" : "absolute"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute w-full z-20"
      ref={cardRef}
      id={"blog" + index}
    >
      <Card
        style={{ borderRadius: isOpen ? "0" : "" }}
        className="w-full p-3 flex flex-col text-left h-full justify-between gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          style={{
            justifyContent: isOpen ? "flex-start" : "space-between"
          }}
          className="flex flex-col text-left h-full gap-2"
        >
          <div className="w-full flex items-center justify-center relative">
            <motion.img
              layout
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: isOpen ? "100%" : "200px",
                objectFit: "contain"
              }}
            ></motion.img>
          </div>
          <motion.div layout className="flex flex-col gap-1 py-2">
            <span className="font-bold text-lg">{title}</span>
          </motion.div>
          {isOpen && (
            <motion.div layout className="flex flex-col gap-1 py-2">
              <span className="text-gray-600">{desc}</span>
              <div className="text-right mt-2">
                <Button
                  className="bg-green-500 w-fit"
                  onClick={(e) => navigateToBlog(e)}
                >
                  <Link href={`/blogs/${blog.router}`}>&#128073; 查看详情</Link>
                </Button>
              </div>
            </motion.div>
          )}
          {isOpen && refers && refers?.length > 0 && (
            <motion.div
              layout
              className="flex flex-col gap-1 text-blue-400 py-2 text-sm"
            >
              参考资料：
              {refers?.map((ref) => {
                return (
                  <div
                    key={ref.title}
                    className="flex flex-row gap-1 items-center justify-between"
                  >
                    <span className="font-bold">&#128216; {ref.title} ：</span>
                    <a href={ref.url} target="_blank" className="underline">
                      {ref.url}
                    </a>
                  </div>
                );
              })}
            </motion.div>
          )}
          <motion.div
            layout
            style={{
              marginTop: isOpen ? "auto" : "0px"
            }}
            className="flex flex-col gap-1"
          >
            <div className="flex flex-row gap-1 items-center">
              {tags.map((tag) => {
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
                {formattedDate}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
