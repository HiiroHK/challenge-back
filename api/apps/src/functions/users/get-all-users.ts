import express from 'express'
export const router = express.Router()
import { prisma } from '../../lib/prisma.js'

router.get('/users', async (req, res) => {
  try {
    const users = await prisma.collaborator.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return res.status(200).json(users)
  } catch (error) {
    if (error) {
      console.log(error)
    }
  }
})
export default router
