import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import mock from "../../../../mock.json";
export async function GET() {
  return NextResponse.json(await prisma.blog.findMany());
  // return Promise.resolve(NextResponse.json(mock));
}
