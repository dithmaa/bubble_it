/*
  Warnings:

  - You are about to drop the column `boostOrderId` on the `Boost` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Boost_userId_boostOrderId_key";

-- AlterTable
ALTER TABLE "Boost" DROP COLUMN "boostOrderId";
