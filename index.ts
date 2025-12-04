import express from "express";
import cors from "cors";

import { router as createUser } from "./functions/users/create-users.js";
import { router as getAll } from "./functions/users/get-all-users.js";
import { router as autenticate } from "./functions/autenticate.js";
import { router as franchises } from "./functions/Franchises/update-franchises.js";

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
