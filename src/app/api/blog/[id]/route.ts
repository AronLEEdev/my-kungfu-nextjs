import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(request: any) {
  return NextResponse.json(
    await prisma.blog.findFirst({ where: { router: request.id } })
  );
}
