import express from "express";
export const router = express.Router();
import { prisma } from "../../lib/prisma.js";

router.put("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, value, type, date } = req.body;

    const updateExpense = await prisma.expenses.update({
      where: { id },
      data: {
        name,
        description,
        value,
        type,
        date: new Date(date),
      },
    });

    return res.status(200).json({
      message: "Despesa atualizada com sucesso",
      expense: updateExpense,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return res.status(404).json({ message: "Despesa não encontrada" });
    }

    return res.status(500).json({ message: "Erro interno" });
  }
});

export default router;
