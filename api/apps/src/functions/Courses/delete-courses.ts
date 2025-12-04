import express from 'express'
export const router = express.Router()

import { prisma } from '../../lib/prisma.js'

router.delete('/courses/:id', async (req, res) => {
  try {
    const { id } = req.params

    const course = await prisma.courses.delete({
      where: { id },
    })

    return res.status(200).json({
      message: 'Curso deletado com sucesso',
      course,
    })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Curso não encontrado' })
    }

    console.error(error)
    return res.status(500).json({ message: 'Erro ao deletar curso' })
  }
})
