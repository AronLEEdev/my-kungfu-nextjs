"use client";

import { useEffect, useRef } from "react";

export function Utterances({
  repo,
  theme = "github-light",
  issueTerm = "pathname"
}: {
  repo: string;
  theme?: string;
  issueTerm?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": issueTerm,
      theme,
      crossOrigin: "anonymous",
      defer: true
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, "" + value);
    });

    setTimeout(() => {
      ref?.current?.append(script);
    }, 300);
  }, [repo, theme, issueTerm]);

  return <div ref={ref} />;
}
