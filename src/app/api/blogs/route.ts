import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  const blogs = await prisma.blog.findMany();
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newBlog = await prisma.blog.create({
      data: {
        router: body.router,
        image: body.image,
        title: body.title,
        desc: body.desc,
        time: new Date(body.time),
        tags: body.tags,
        refers: body.refers
      }
    });
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
