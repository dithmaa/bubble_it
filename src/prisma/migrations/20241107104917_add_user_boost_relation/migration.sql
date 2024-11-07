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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boost" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "boostOrderId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Boost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tg_id_key" ON "User"("tg_id");

-- CreateIndex
CREATE UNIQUE INDEX "Boost_userId_boostOrderId_key" ON "Boost"("userId", "boostOrderId");

-- AddForeignKey
ALTER TABLE "Boost" ADD CONSTRAINT "Boost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
