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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_collaborator" ("createdAt", "email", "id", "name", "phoneNumber", "sector", "status", "wage") SELECT "createdAt", "email", "id", "name", "phoneNumber", "sector", "status", "wage" FROM "collaborator";
DROP TABLE "collaborator";
ALTER TABLE "new_collaborator" RENAME TO "collaborator";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
