/*
  Warnings:

  - The primary key for the `Owner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `adddress` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Owner` table. All the data in the column will be lost.
  - Added the required column `address` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Owner` table without a default value. This is not possible if the table is not empty.

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
    "ownerCpf" TEXT,
    CONSTRAINT "Dog_ownerCpf_fkey" FOREIGN KEY ("ownerCpf") REFERENCES "Owner" ("cpf") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Dog" ("age", "breed", "extraInfo", "id", "name", "ownerId") SELECT "age", "breed", "extraInfo", "id", "name", "ownerId" FROM "Dog";
DROP TABLE "Dog";
ALTER TABLE "new_Dog" RENAME TO "Dog";
CREATE TABLE "new_Owner" (
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "telephoneNumber" TEXT NOT NULL
);
INSERT INTO "new_Owner" ("name", "telephoneNumber") SELECT "name", "telephoneNumber" FROM "Owner";
DROP TABLE "Owner";
ALTER TABLE "new_Owner" RENAME TO "Owner";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
