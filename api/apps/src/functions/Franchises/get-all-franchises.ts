import express from 'express'
import { prisma } from '../../lib/prisma.js'

export const router = express.Router()

router.get('/franchises', async (req, res) => {
  try {
    const franchises = await prisma.franchises.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return res.status(200).json(franchises)
  } catch (error) {
    if (error) {
      console.log(error)
    }
  }
})
