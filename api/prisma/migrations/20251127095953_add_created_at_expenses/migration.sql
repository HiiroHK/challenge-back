/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `Franchises` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Franchises` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Sale` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefone]` on the table `Sale` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `collaborator` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT,
    "status" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Courses" ("description", "id", "image", "name", "status", "value") SELECT "description", "id", "image", "name", "status", "value" FROM "Courses";
DROP TABLE "Courses";
ALTER TABLE "new_Courses" RENAME TO "Courses";
CREATE TABLE "new_Expenses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Expenses" ("date", "description", "id", "name", "type", "value") SELECT "date", "description", "id", "name", "type", "value" FROM "Expenses";
DROP TABLE "Expenses";
ALTER TABLE "new_Expenses" RENAME TO "Expenses";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Franchises_phoneNumber_key" ON "Franchises"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Franchises_email_key" ON "Franchises"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Sale_email_key" ON "Sale"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Sale_telefone_key" ON "Sale"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "collaborator_phoneNumber_key" ON "collaborator"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "collaborator_email_key" ON "collaborator"("email");
