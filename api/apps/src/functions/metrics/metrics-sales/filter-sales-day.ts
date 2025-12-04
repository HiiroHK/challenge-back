import express from 'express'
import { prisma } from '../../../lib/prisma.js'

export const router = express.Router()

router.get('/sales-day/:date', async (req, res) => {
  const getDay = new Date(req.params.date + 'T00:00:00Z')
  const sales = await prisma.sale.findMany({
    where: {
      dataVenda: {
        gte: getDay
          ? new Date(
              Date.UTC(
                getDay.getUTCFullYear(),
                getDay.getUTCMonth(),
                getDay.getUTCDate(),
                0,
                0,
                0,
                0
              )
            )
          : undefined,
        lte: getDay
          ? new Date(
              Date.UTC(
                getDay.getUTCFullYear(),
                getDay.getUTCMonth(),
                getDay.getUTCDate(),
                23,
                59,
                59,
                999
              )
            )
          : undefined,
      },
    },
  })
  return res.status(200).json(sales)
})
