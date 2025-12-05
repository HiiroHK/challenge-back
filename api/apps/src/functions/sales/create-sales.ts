import express from "express";
import { prisma } from "../../lib/prisma.js";
export const router = express.Router();

interface CalculoValorLiquidoParams {
  valorBruto: number;
  desconto: number;
  comisao: number;
  taxaCartaoPercent: number;
  impostoPercent: number;
  impostoSobre?: "bruto" | "aposDesconto";
}

function calcularValorLiquido({
  valorBruto,
  desconto,
  comisao,
  taxaCartaoPercent,
  impostoPercent,
  impostoSobre = "aposDesconto",
}: CalculoValorLiquidoParams) {
  // Garantir números
  valorBruto = Number(valorBruto) || 0;
  desconto = Number(desconto) || 0;
  comisao = Number(comisao) || 0;
  taxaCartaoPercent = Number(taxaCartaoPercent) || 0;
  impostoPercent = Number(impostoPercent) || 0;

  // 1. Valor após desconto
  const valorAposDesconto = valorBruto - desconto;

  // 2. Base do imposto (pode ser sobre o bruto ou sobre o valor após desconto)
  const baseImposto = impostoSobre === "bruto" ? valorBruto : valorAposDesconto;

  // 3. Cálculos percentuais
  const valorComissao = valorAposDesconto * (comisao / 100);
  const valorTaxaCartao = valorAposDesconto * (taxaCartaoPercent / 100);
  const valorImposto = baseImposto * (impostoPercent / 100);

  // 4. Valor líquido final
  const valorLiquido =
    valorAposDesconto - valorComissao - valorTaxaCartao - valorImposto;

  return {
    valorBruto,
    desconto,
    valorAposDesconto,
    comisao,
    valorComissao,
    taxaCartaoPercent,
    valorTaxaCartao,
    impostoPercent,
    impostoSobre,
    baseImposto,
    valorImposto,
    valorLiquido,
  };
}

router.post("/sales", async (req, res) => {
  try {
    const {
      modalidade,
      courseId,
      nomeAluno,
      email,
      telefone,
      valorBruto,
      desconto,
      comisao,
      imposto,
      taxaCartao,
      dataVenda: date,
      valorLiquido: calcularValorLiquido,
    } = req.body;

    await prisma.sale.create({
      data: {
        modalidade,
        courseId,
        nomeAluno,
        email,
        telefone,
        valorBruto,
        desconto,
        comisao,
        imposto,
        taxaCartao,
        dataVenda: new Date(date),
        valorLiquido: calcularValorLiquido,
        course: {
          connect: { id: "courseId" }, // id de um curso existente
        },
      },
    });

    return res.status(201).json({ message: "Sale created successfully" });
  } catch (error) {
    console.log(error);
  }
});
