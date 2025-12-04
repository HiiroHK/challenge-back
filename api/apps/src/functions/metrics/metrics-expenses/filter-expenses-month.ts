import express from 'express'
import { prisma } from '../../../lib/prisma.js'
import { date } from 'zod'
export const router = express.Router()

router.get('/expenses-month/:date', async (req, res) => {
  try {
    const dateQuery = new Date(req.params.date)
    const firstDay = new Date(
      Date.UTC(dateQuery.getFullYear(), dateQuery.getMonth(), 1)
    )
    const lastDay = new Date(
      Date.UTC(dateQuery.getFullYear(), dateQuery.getMonth() + 1, 1)
    )

    const expenses = await prisma.expenses.findMany({
      where: {
        date: {
          gte: firstDay,
          lt: lastDay,
        },
        type: 'Variavel',
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return res.status(200).json(expenses)
  } catch (error) {
    if (error) {
      console.log(error)
    }
  }
})
