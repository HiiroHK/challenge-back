import { minLength, z } from 'zod'

export const userSchemaBody = z.object({
  //id: z.string({ message: 'Id inválido' }),
  name: z
    .string({ message: 'O nome deve conter no mínimo 3 caracteres' })
    .min(3),
  phoneNumber: z
    .string({ message: 'Digite um número de telefone válido' })
    .min(10)
    .max(11),
  email: z.email({ message: 'Digite um e-mail valido' }),
  wage: z.number({ message: 'O salario deve ser um valor numérico' }).min(0),
  sector: z
    .string({ message: 'O setor deve conter no mínimo 3 caracteres' })
    .min(3),
  status: z.enum(['ATIVO', 'INATIVO', 'FERIAS']),
})
