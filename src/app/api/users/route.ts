import { prisma } from "@/src/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tgId = searchParams.get("tg_id");

  if (!tgId) {
    return NextResponse.json({ error: "tg_id is required" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        tg_id: Number(tgId),
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
