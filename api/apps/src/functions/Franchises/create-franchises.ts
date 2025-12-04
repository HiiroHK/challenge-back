import express from 'express'
import { prisma } from '../../lib/prisma.js'
export const router = express.Router()

router.post('/franchises', async (req, res) => {
  try {
    const { name, city, state, responsible, phoneNumber, email, status } =
      req.body

    await prisma.franchises.create({
      data: {
        name,
        city,
        state,
        responsible,
        phoneNumber,
        email,
        status,
      },
    })
    return res.status(201).json({ message: 'Franchise created successfully' })
  } catch (error) {
    console.log(error)
  }
})
