/*
  Warnings:

  - Added the required column `createdAt` to the `collaborator` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_collaborator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "wage" REAL NOT NULL,
    "sector" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_collaborator" ("email", "id", "name", "phoneNumber", "sector", "status", "wage") SELECT "email", "id", "name", "phoneNumber", "sector", "status", "wage" FROM "collaborator";
DROP TABLE "collaborator";
ALTER TABLE "new_collaborator" RENAME TO "collaborator";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
