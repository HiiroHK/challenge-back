import express from 'express'
// import router from './functions/users/delete-users'
import { router as createUser } from './functions/users/create-users'
import { router as getAll } from './functions/users/get-all-users'

const app = express()

app.use(express.json())
// app.use(router)
app.use(createUser)
app.use(getAll)

// Informando onde o servidor estará rodando
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
