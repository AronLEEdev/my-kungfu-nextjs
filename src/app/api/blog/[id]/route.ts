import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const router = req.query.router;
  res.end(await prisma.blog.findFirst({ where: { router } }));
}
