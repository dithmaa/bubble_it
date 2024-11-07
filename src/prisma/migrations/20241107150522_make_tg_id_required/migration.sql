/*
  Warnings:

  - Made the column `tg_id` on table `Boost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Boost" ALTER COLUMN "tg_id" SET NOT NULL;
