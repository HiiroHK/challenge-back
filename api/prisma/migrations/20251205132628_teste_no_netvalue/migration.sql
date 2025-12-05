-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "modalidade" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "nomeAluno" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,
    "valorBruto" REAL NOT NULL,
    "desconto" REAL,
    "comisao" REAL,
    "imposto" REAL,
    "taxaCartao" REAL,
    "valorLiquido" REAL,
    "dataVenda" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Sale_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Sale" ("comisao", "courseId", "dataVenda", "desconto", "email", "id", "imposto", "modalidade", "nomeAluno", "taxaCartao", "telefone", "valorBruto", "valorLiquido") SELECT "comisao", "courseId", "dataVenda", "desconto", "email", "id", "imposto", "modalidade", "nomeAluno", "taxaCartao", "telefone", "valorBruto", "valorLiquido" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
CREATE UNIQUE INDEX "Sale_email_key" ON "Sale"("email");
CREATE UNIQUE INDEX "Sale_telefone_key" ON "Sale"("telefone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
