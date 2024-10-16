/*
  Warnings:

  - You are about to drop the column `ownerCpf` on the `Dog` table. All the data in the column will be lost.
  - The primary key for the `Owner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Owner` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER,
    "extraInfo" TEXT,
    "ownerId" TEXT,
    CONSTRAINT "Dog_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Dog" ("age", "breed", "extraInfo", "id", "name", "ownerId") SELECT "age", "breed", "extraInfo", "id", "name", "ownerId" FROM "Dog";
DROP TABLE "Dog";
ALTER TABLE "new_Dog" RENAME TO "Dog";
CREATE TABLE "new_Owner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT NOT NULL,
    "telephoneNumber" TEXT NOT NULL
);
INSERT INTO "new_Owner" ("address", "cpf", "name", "telephoneNumber") SELECT "address", "cpf", "name", "telephoneNumber" FROM "Owner";
DROP TABLE "Owner";
ALTER TABLE "new_Owner" RENAME TO "Owner";
CREATE UNIQUE INDEX "Owner_cpf_key" ON "Owner"("cpf");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
