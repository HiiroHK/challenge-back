import express from 'express'
import { prisma } from '../../lib/prisma'
export const router = express.Router()

router.post('/sales', async (req, res) => {
  try {
    const {
      modalidade,
      courseId,
      nomeAluno,
      email,
      telefone,
      valorBruto,
      valorLiquido,
    } = req.body

    await prisma.sale.create({
      data: {
        modalidade,
        courseId,
        nomeAluno,
        email,
        telefone,
        valorBruto,
        valorLiquido,
        course: {
          connect: { id: 'e1c44acf-5e86-456b-9cd5-329a335cb210' }, // id de um curso existente
        },
      },
    })

    return res.status(201).json({ message: 'Sale created successfully' })
  } catch (error) {
    console.log(error)
  }
})
