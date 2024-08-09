/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quote` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_authorId_fkey";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "description_embedding" DOUBLE PRECISION[];

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "Quote";
