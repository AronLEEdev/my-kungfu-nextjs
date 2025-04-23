"use client";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
export function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const { image, title, desc, time, tags, refers } = blog;

  useEffect(() => {
    const el: HTMLElement | null = document.querySelector(`#blog${index}`);
    if (el) el.style.top = `${400 * index}px`;
    const date = new Date(time);
    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
    setFormattedDate(formatter.format(date));
    return () => {};
  }, []);

  function navigateToBlog(e: any): void {
    e.stopPropagation();
  }

  function DetailCard() {
    return (
      <Card
        className="w-full p-4 flex flex-col text-left h-full justify-between gap-2"
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
                objectFit: "contain",
                maxWidth: isOpen ? "400px" : ""
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
              className="flex flex-col gap-3 text-blue-400 py-2 text-sm"
            >
              参考资料：
              {refers?.map((ref) => {
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
    );
  }

  const getOpenStyle: any = isOpen
    ? {
        height: "fit-content",
        width: "fit-content",
        maxWidth: "80vw",
        zIndex: 100,
        position: "fixed",
        top: "0",
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto"
      }
    : {};

  return (
    <div className="lg:flex lg:justify-center">
      <motion.div
        layout
        style={{
          height: isOpen ? "100vh" : "400px",
          zIndex: isOpen ? 100 : 20,
          top: isOpen ? "0" : `${400 * index}px`,
          position: isOpen ? "fixed" : "absolute",
          maxWidth: isOpen ? "100vw" : "500px",
          padding: isOpen ? "0" : "16px"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute w-full z-20 left-1/2 transform -translate-x-1/2 lg:hidden"
        ref={cardRef}
        id={"blog" + index}
      >
        <DetailCard />
      </motion.div>
      <motion.div
        layout
        style={{
          ...getOpenStyle
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden lg:block h-[400px] max-w-[500px] w-full rounded-2xl"
        ref={cardRef}
        id={"blog" + index}
      >
        <DetailCard />
      </motion.div>
      {isOpen && (
        <motion.div
          layout
          className="hidden lg:block fixed top-0 left-0 w-full h-full bg-black/50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
