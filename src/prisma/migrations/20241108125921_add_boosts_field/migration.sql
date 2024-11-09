-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tg_id" INTEGER NOT NULL,
    "name" TEXT DEFAULT 'username',
    "tg_username" TEXT DEFAULT 'none',
    "clickAmount" INTEGER NOT NULL,
    "clickPerOne" INTEGER NOT NULL,
    "showBoosts" INTEGER NOT NULL,
    "isCompletedMiss" BOOLEAN NOT NULL,
    "isCompletedMission" BOOLEAN NOT NULL,
    "boosts" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tg_id_key" ON "User"("tg_id");
