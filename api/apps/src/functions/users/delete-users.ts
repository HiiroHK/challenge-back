// import { users } from '../..'
// import { Router } from 'express'

// const router = Router()

// router.delete('/users/:id', (req, res) => {
//   const { id } = req.params
//   const user = users.findIndex((user) => user.id !== parseInt(id))

//   if (user === -1) {
//     return res.status(404).json({
//       message: 'Usuário não encontrado',
//     })
//   }

//   const deleteUser = users.splice(user, 1)[0]

//   res.json({
//     message: 'Usuário deletado com sucesso',
//     user,
//   })
// })
// export default router
