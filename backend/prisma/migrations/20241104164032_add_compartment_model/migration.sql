/*
  Warnings:

  - You are about to drop the column `locatedAt` on the `Dog` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Compartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dogName" TEXT NOT NULL,
    "ifOccupied" BOOLEAN NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "dogId" TEXT NOT NULL,
    CONSTRAINT "Compartment_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER,
    "extraInfo" TEXT,
    "updatedAt" DATETIME NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Dog_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Dog" ("age", "breed", "extraInfo", "id", "name", "ownerId", "updatedAt") SELECT "age", "breed", "extraInfo", "id", "name", "ownerId", "updatedAt" FROM "Dog";
DROP TABLE "Dog";
ALTER TABLE "new_Dog" RENAME TO "Dog";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Compartment_dogId_key" ON "Compartment"("dogId");
