import { prisma } from "@/src/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tgId = searchParams.get("tg_id");

  if (!tgId) {
    return NextResponse.json({ error: "tg_id is required" }, { status: 400 });
  }

  try {
    // Ищем пользователя по tg_id
    const user = await prisma.user.findUnique({
      where: {
        tg_id: Number(tgId),
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Возвращаем данные пользователя, включая массив бустов
    return NextResponse.json({
      ...user,
      boosts: user.boosts, // Здесь мы возвращаем JSON-поле boosts
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
