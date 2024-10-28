-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Owner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT NOT NULL,
    "telephoneNumber" TEXT NOT NULL,
    "paymentMethod" TEXT,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Owner" ("address", "cpf", "email", "id", "name", "paymentMethod", "telephoneNumber", "updatedAt") SELECT "address", "cpf", "email", "id", "name", "paymentMethod", "telephoneNumber", "updatedAt" FROM "Owner";
DROP TABLE "Owner";
ALTER TABLE "new_Owner" RENAME TO "Owner";
CREATE UNIQUE INDEX "Owner_cpf_key" ON "Owner"("cpf");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
