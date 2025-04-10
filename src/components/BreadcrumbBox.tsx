"use client";
import { useCallback, useEffect, useState, useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
import { fetchBlog } from "@/lib/utils";

export default function BreadcrumbBox() {
  const pathname = usePathname();
  const segments = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname]
  );
  const [routingMap, setRoutingMap] = useState([
    {
      key: "blogs",
      label: "博客记录"
    },
    {
      key: "stacks",
      label: "常用链接"
    }
  ]);

  const updateBlogRouter = useCallback(async (slug: string) => {
    if (!slug) {
      return;
    }
    const blog = await fetchBlog(slug);
    if (blog) {
      setRoutingMap((prev) => [
        ...prev,
        {
          key: slug,
          label: blog.title
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (segments.length >= 2 && segments[0] === "blogs") {
      updateBlogRouter(segments[segments.length - 1] || "");
    }
  }, [updateBlogRouter, segments]);

  return (
    <div className="p-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {segments.map((segment, index) => {
            const url = `/${segments.slice(0, index + 1).join("/")}`;
            return (
              <div className="flex items-center gap-1" key={segment}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={url}
                    style={
                      index === segments.length - 1
                        ? { color: "blueviolet", textDecoration: "underline" }
                        : {}
                    }
                  >
                    {routingMap.find((item) => item.key === segment)?.label ||
                      segment}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < segments.length - 1 && <BreadcrumbSeparator />}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
