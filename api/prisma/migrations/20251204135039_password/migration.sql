/*
  Warnings:

  - Added the required column `password` to the `collaborator` table without a default value. This is not possible if the table is not empty.

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
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_collaborator" ("createdAt", "email", "id", "name", "phoneNumber", "sector", "status", "wage", "password") SELECT "createdAt", "email", "id", "name", "phoneNumber", "sector", "status", "wage", 'temp_password_change_me' FROM "collaborator";
DROP TABLE "collaborator";
ALTER TABLE "new_collaborator" RENAME TO "collaborator";
CREATE UNIQUE INDEX "collaborator_phoneNumber_key" ON "collaborator"("phoneNumber");
CREATE UNIQUE INDEX "collaborator_email_key" ON "collaborator"("email");
PRAGMA foreign_keys=ON;
PRAGMA foreign_keys=OFF;