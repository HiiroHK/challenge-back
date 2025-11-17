import express from 'express'
export const router = express.Router()
import { prisma } from '../../lib/prisma.js'

router.put('/franchises/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, city, state, responsible, phoneNumber, email, status } =
      req.body

    const updatedFranchises = await prisma.franchises.update({
      where: { id },
      data: {
        name,
        city,
        state,
        responsible,
        phoneNumber,
        email,
        status,
      },
    })

    return res.status(200).json({
      message: 'Franquia atualizado com sucesso',
      user: updatedFranchises,
    })
  } catch (error) {
    console.log(error)

    if (error instanceof Error) {
      return res.status(404).json({ message: 'Franquia não encontrado' })
    }

    return res.status(500).json({ message: 'Erro interno' })
  }
})

export default router
