import express from "express";
export const router = express.Router();
import { prisma } from "../../lib/prisma.js";
import { userSchemaBody } from "../../models/users-models";

router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phoneNumber, email, wage, sector, status, password } =
      userSchemaBody.parse(req.body);

    const updatedUser = await prisma.collaborator.update({
      where: { id },
      data: {
        name,
        phoneNumber,
        email,
        wage,
        sector,
        status,
        password,
      },
    });

    return res.status(200).json({
      message: "Usuário atualizado com sucesso",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(500).json({ message: "Erro interno" });
  }
});

export default router;
