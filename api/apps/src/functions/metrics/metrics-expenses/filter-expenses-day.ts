import express from 'express'
import { prisma } from '../../../lib/prisma.js'

export const router = express.Router()

router.get('/expenses-day/:date', async (req, res) => {
  const getDay = new Date(req.params.date)
  const expense = await prisma.expenses.findMany({
    where: {
      date: {
        gte: getDay ? new Date(getDay.setHours(0, 0, 0, 0)) : undefined,
        lte: getDay ? new Date(getDay.setHours(23, 59, 59, 59)) : undefined,
      },
    },
  })
  return res.status(200).json(expense)
})
