-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Compartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isOccupied" BOOLEAN NOT NULL DEFAULT false,
    "dogId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Compartment_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Compartment" ("dogId", "id", "isOccupied", "updatedAt") SELECT "dogId", "id", "isOccupied", "updatedAt" FROM "Compartment";
DROP TABLE "Compartment";
ALTER TABLE "new_Compartment" RENAME TO "Compartment";
CREATE UNIQUE INDEX "Compartment_dogId_key" ON "Compartment"("dogId");
CREATE TABLE "new_Dog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER,
    "extraInfo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Dog_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Dog" ("age", "breed", "extraInfo", "id", "name", "ownerId", "updatedAt") SELECT "age", "breed", "extraInfo", "id", "name", "ownerId", "updatedAt" FROM "Dog";
DROP TABLE "Dog";
ALTER TABLE "new_Dog" RENAME TO "Dog";
CREATE TABLE "new_Owner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT NOT NULL,
    "telephoneNumber" TEXT NOT NULL,
    "paymentMethod" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Owner" ("address", "cpf", "email", "id", "name", "paymentMethod", "telephoneNumber", "updatedAt") SELECT "address", "cpf", "email", "id", "name", "paymentMethod", "telephoneNumber", "updatedAt" FROM "Owner";
DROP TABLE "Owner";
ALTER TABLE "new_Owner" RENAME TO "Owner";
CREATE UNIQUE INDEX "Owner_cpf_key" ON "Owner"("cpf");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
