import express from 'express'
import { prisma } from '../../../lib/prisma.js'
export const router = express.Router()

router.get('/expenses-year/:year', async (req, res) => {
  try {
    const year = Number(req.params.year)
    console.log(year)
    const firstDay = new Date(year, 0, 1, 0, 0, 0)
    const lastDay = new Date(year, 11, 31, 23, 59, 59)

    const expenses = await prisma.expenses.findMany({
      where: {
        date: {
          gte: firstDay,
          lte: lastDay,
        },
      },
    })
    console.log(expenses)
    return res.status(200).json(expenses)
  } catch (error) {
    if (error) {
      console.log(error)
    }
  }
})
