import expresss from 'express'
import { prisma } from '../../lib/prisma.js'

export const router = expresss.Router()

router.get('/courses', async (req, res) => {
  try {
    const courses = await prisma.courses.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return res.status(200).json(courses)
  } catch (error) {
    if (error) {
      console.log(error)
    }
  }
})
