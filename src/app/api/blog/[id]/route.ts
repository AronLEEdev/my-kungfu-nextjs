import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
export async function GET(request: Request) {
    return NextResponse.json(await prisma.blog.findFirst({ where: { router: request.id } }));
}