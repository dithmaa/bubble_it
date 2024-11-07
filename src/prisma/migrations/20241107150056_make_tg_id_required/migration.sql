-- AlterTable
ALTER TABLE "Boost" ADD COLUMN     "tg_id" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Boost_tg_id_idx" ON "Boost"("tg_id");
