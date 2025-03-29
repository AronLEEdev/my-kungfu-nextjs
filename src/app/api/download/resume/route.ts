import fetch from "node-fetch";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // 从URL中获取lang参数
    const url = new URL(request.url);
    const lang = url.searchParams.get("lang") || "en"; // 默认英语

    const fileUrl = `${url.protocol}//${url.host}/resume/resume-${lang}-LEE-I-HSIU.pdf`;

    // 获取文件
    const response = await fetch(fileUrl);

    if (!response.ok) {
      return new NextResponse("File not found", { status: 404 });
    }

    // 创建可读流
    const readableStream = response.body;

    // 创建响应对象并设置headers
    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set(
      "Content-Disposition",
      `attachment; filename="resume-${lang}.pdf"`
    );

    // 返回流式响应
    return new NextResponse(readableStream as any, { headers });
  } catch (error) {
    console.error("Download error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
