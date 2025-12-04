import express from 'express'
export const router = express.Router()

import { prisma } from '../../lib/prisma.js'

router.delete('/sales/:id', async (req, res) => {
  try {
    const { id } = req.params

    const sale = await prisma.sale.delete({
      where: { id },
    })

    return res.status(200).json({
      message: 'Venda deletada com sucesso',
      sale,
    })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Venda não encontrada' })
    }

    console.error(error)
    return res.status(500).json({ message: 'Erro ao deletar venda' })
  }
})
