import express from 'express'
import cors from 'cors'
// import router from './functions/users/delete-users'
import { router as createUser } from './functions/users/create-users'
import { router as getAll } from './functions/users/get-all-users'
import { router as autenticate } from './functions/autenticate'
import { router as franchises } from './functions/Franchises/update-franchises'

/* rota de autenticação */

const app = express()
app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json())
// app.use(router)
app.use(createUser)
app.use(getAll)

app.use(autenticate)

app.use(franchises)

// Informando onde o servidor estará rodando
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
