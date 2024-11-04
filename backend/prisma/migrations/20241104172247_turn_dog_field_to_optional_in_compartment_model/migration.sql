-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Compartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isOccupied" BOOLEAN NOT NULL DEFAULT false,
    "dogId" TEXT,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Compartment_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Compartment" ("dogId", "id", "isOccupied", "updatedAt") SELECT "dogId", "id", "isOccupied", "updatedAt" FROM "Compartment";
DROP TABLE "Compartment";
ALTER TABLE "new_Compartment" RENAME TO "Compartment";
CREATE UNIQUE INDEX "Compartment_dogId_key" ON "Compartment"("dogId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
