import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
// import mock from "../../../../../mock.json";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  // const result = mock.find((el) => el.router === id);
  // return Promise.resolve(NextResponse.json(result));
  return NextResponse.json(
    await prisma.blog.findFirst({ where: { router: id } })
  );
}
