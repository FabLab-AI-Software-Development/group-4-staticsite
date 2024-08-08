/*
  Warnings:

  - Added the required column `description` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "description_embedding" DOUBLE PRECISION[];
