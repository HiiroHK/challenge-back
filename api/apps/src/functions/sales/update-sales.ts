import express from "express";
export const router = express.Router();
import { prisma } from "../../lib/prisma.js";

router.put("/sales/:id", async (req, res) => {
  try {
    const { id } = req.params;
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
      valorLiquido,
    } = req.body;

    const updateSale = await prisma.sale.update({
      where: { id },
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
        valorLiquido,
      },
    });

    return res.status(200).json({
      message: "Venda atualizada com sucesso",
      user: updateSale,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return res.status(404).json({ message: "Venda não encontrada" });
    }

    return res.status(500).json({ message: "Erro interno" });
  }
});

export default router;
