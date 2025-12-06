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
  valorBruto = Number(valorBruto) || 0;
  desconto = Number(desconto) || 0;
  comisao = Number(comisao) || 0;
  taxaCartaoPercent = Number(taxaCartaoPercent) || 0;
  impostoPercent = Number(impostoPercent) || 0;

  const valorAposDesconto = valorBruto - desconto;

  const baseImposto = impostoSobre === "bruto" ? valorBruto : valorAposDesconto;

  const valorComissao = valorAposDesconto * (comisao / 100);
  const valorTaxaCartao = valorAposDesconto * (taxaCartaoPercent / 100);
  const valorImposto = baseImposto * (impostoPercent / 100);

  const valorLiquido =
    valorAposDesconto - valorComissao - valorTaxaCartao - valorImposto;

  return valorLiquido;
}

// -------------------------------------------------------------

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
      dataVenda,
    } = req.body;

    // ⭐ CALCULANDO O VALOR LÍQUIDO CORRETAMENTE
    const valorLiquido = calcularValorLiquido({
      valorBruto,
      desconto,
      comisao,
      taxaCartaoPercent: taxaCartao,
      impostoPercent: imposto,
    });

    await prisma.sale.create({
      data: {
        modalidade,
        nomeAluno,
        email,
        telefone,
        valorBruto,
        desconto,
        comisao,
        imposto,
        taxaCartao,
        dataVenda: new Date(dataVenda),
        valorLiquido,
        course: {
          connect: { id: courseId }, // agora usa o valor correto
        },
      },
    });

    return res.status(201).json({ message: "Sale created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro ao criar venda" });
  }
});
