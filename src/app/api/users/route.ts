import { prisma } from "@/src/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await prisma.user.findMany(); // Пример асинхронного запроса

  return await NextResponse.json(user);
}
