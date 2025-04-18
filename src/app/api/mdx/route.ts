// app/api/mdx/route.ts
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), "src/markdowns", `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf8");
    const { content } = matter(fileContent); // 移除 Frontmatter
    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json({ error: "MDX not found" }, { status: 404 });
  }
}
