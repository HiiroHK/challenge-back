import express from 'express'
import { prisma } from '../../../lib/prisma.js'
import { date } from 'zod'
export const router = express.Router()

router.get('/sales-month/:date', async (req, res) => {
  try {
    const dateQuery = new Date(req.params.date)
    const firstDay = new Date(
      Date.UTC(dateQuery.getFullYear(), dateQuery.getMonth(), 1)
    )
    const lastDay = new Date(
      Date.UTC(dateQuery.getFullYear(), dateQuery.getMonth() + 1, 1)
    )

    const sales = await prisma.sale.findMany({
      where: {
        dataVenda: {
          gte: firstDay,
          lt: lastDay,
        },
      },
      orderBy: {
        dataVenda: 'asc',
      },
    })

    return res.status(200).json(sales)
  } catch (error) {
    if (error) {
      console.log(error)
    }
  }
})
