import express from 'express'
export const router = express.Router()
import { prisma } from '../../lib/prisma.js'

router.put('/courses/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { image, name, description, value, status } = req.body

    const updatedCourse = await prisma.courses.update({
      where: { id },
      data: {
        image,
        name,
        description,
        value,
        status,
      },
    })

    return res.status(200).json({
      message: 'Curso atualizado com sucesso',
      user: updatedCourse,
    })
  } catch (error) {
    console.log(error)

    if (error instanceof Error) {
      return res.status(404).json({ message: 'Curso não encontrado' })
    }

    return res.status(500).json({ message: 'Erro interno' })
  }
})

export default router
