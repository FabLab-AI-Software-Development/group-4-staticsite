/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_authorId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "Quote";

-- CreateTable
CREATE TABLE "Event" (
    "_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Location" (
    "location_id" SERIAL NOT NULL,
    "name" TEXT,
    "street_name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("location_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_event_id_key" ON "Location"("event_id");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
