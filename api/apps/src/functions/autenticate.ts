import { prisma } from '../lib/prisma.js'
import { Request, Response } from 'express'
import express from 'express'
import jwt from 'jsonwebtoken'

export const router = express.Router()
async function Autenticate(req: Request, res: Response) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' })
    }

    // busca pelo usuário (assumindo email @unique no schema)
    const user = await prisma.collaborator.findUnique({ where: { email } })

    if (!user || !user.password) {
      return res.status(401).json({ message: 'Credenciais inválidas' })
    }

    const secret = process.env.JWT_SECRET || 'changeme'
    const token = jwt.sign({ sub: user.id, email: user.email }, secret, {
      expiresIn: '1h',
    })

    return res.status(200).json({
      message: 'Usuário logado com sucesso',
      token,
      user: { id: user.id, email: user.email, name: user.name ?? null },
    })
  } catch (error) {
    if (error instanceof Error) {
      console.error('Autenticação error:', error)
      return res.status(500).json({ message: 'Erro ao logar usuário' })
    }
  }
}
router.post('/autenticate', Autenticate)
