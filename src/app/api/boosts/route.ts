import { prisma } from "@/src/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  try {
    const boosts = await prisma.boost.findMany({
      where: {
        userId: Number(userId),
      },
    });

    return NextResponse.json(boosts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch boosts" },
      { status: 500 }
    );
  }
}
