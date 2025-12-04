import express from 'express'
export const router = express.Router()

import { prisma } from '../../lib/prisma.js'

router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params

    const user = await prisma.collaborator.delete({
      where: { id },
    })

    return res.status(200).json({
      message: 'Usuário deletado com sucesso',
      user,
    })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Usuário nao encontrado' })
    }

    console.error(error)
    return res.status(500).json({ message: 'Erro ao deletar usuário' })
  }
})
