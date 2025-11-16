/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `collaborator` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "collaborator" ADD COLUMN "password" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "collaborator_password_key" ON "collaborator"("password");
