"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPage() {
  const { slug } = useParams() as { slug: string };
  const [mdxContent, setMdxContent] = useState("");

  useEffect(() => {
    fetch(`/api/mdx?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setMdxContent(data.content));
  }, [slug]);

  return <ReactMarkdown>{mdxContent}</ReactMarkdown>;
}
