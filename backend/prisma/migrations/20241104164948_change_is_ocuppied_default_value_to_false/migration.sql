/*
  Warnings:

  - You are about to drop the column `dogName` on the `Compartment` table. All the data in the column will be lost.
  - You are about to drop the column `ifOccupied` on the `Compartment` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Compartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isOccupied" BOOLEAN NOT NULL DEFAULT false,
    "dogId" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Compartment_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Compartment" ("dogId", "id", "updatedAt") SELECT "dogId", "id", "updatedAt" FROM "Compartment";
DROP TABLE "Compartment";
ALTER TABLE "new_Compartment" RENAME TO "Compartment";
CREATE UNIQUE INDEX "Compartment_dogId_key" ON "Compartment"("dogId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
