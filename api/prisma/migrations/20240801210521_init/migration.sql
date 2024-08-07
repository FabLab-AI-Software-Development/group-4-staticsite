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
