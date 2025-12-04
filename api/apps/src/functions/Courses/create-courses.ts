import express from 'express'
import { prisma } from '../../lib/prisma.js'
export const router = express.Router()

router.post('/courses', async (req, res) => {
  try {
    const { image, status, name, description, value } = req.body

    await prisma.courses.create({
      data: {
        image,
        status,
        name,
        description,
        value,
      },
    })
    return res.status(201).json({ message: 'Course created successfully' })
  } catch (error) {
    console.log(error)
  }
})
