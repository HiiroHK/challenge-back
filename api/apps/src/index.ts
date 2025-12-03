import express from "express";
import cors from "cors";

import { router as createUser } from "./functions/users/create-users";
import { router as getAll } from "./functions/users/get-all-users";
import { router as autenticate } from "./functions/autenticate";
import { router as franchises } from "./functions/Franchises/update-franchises";

const app = express();

// Libera o front-end (Vite) para acessar o backend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Rotas
app.use(createUser);
app.use(getAll);
app.use(autenticate);
app.use(franchises);

// Servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
