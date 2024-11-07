import { prisma } from "@/src/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tgId = searchParams.get("tg_id");

  if (!tgId) {
    return NextResponse.json({ error: "tg_id is required" }, { status: 400 });
  }

  try {
    // Получаем бусты по tg_id напрямую
    const boosts = await prisma.boost.findMany({
      where: {
        tg_id: Number(tgId),
      },
    });

    if (!boosts || boosts.length === 0) {
      return NextResponse.json(
        { error: `No boosts found for tg_id ${tgId}` },
        { status: 404 }
      );
    }

    return NextResponse.json(boosts);
  } catch (error) {
    console.error("Failed to fetch boosts:", error);
    return NextResponse.json(
      { error: `Failed to fetch boosts for tg_id ${tgId}` },
      { status: 500 }
    );
  }
}
